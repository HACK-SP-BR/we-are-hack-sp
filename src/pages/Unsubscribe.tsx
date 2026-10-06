import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { apiUrl, configUrl } from '../config/config';
import { brand } from '../constants/cdn';

type State =
  | { kind: 'loading' }
  | { kind: 'invalid' }
  | { kind: 'ready'; optedIn: boolean; email: string | null }
  | { kind: 'failed' };

/**
 * A página que o link "sair da lista" das campanhas abre.
 *
 * Ela lê o estado antes de mexer em qualquer coisa e só descadastra num POST
 * disparado por clique. Descadastrar ao abrir seria mais curto, mas antivírus
 * corporativo e pré-carregamento de link abrem tudo que chega por e-mail — e
 * quem nunca clicou acabaria fora da lista.
 */
export function Unsubscribe() {
  const { t } = useLanguage();
  const [state, setState] = useState<State>({ kind: 'loading' });
  const [busy, setBusy] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const sig = params.get('sig');

  useEffect(() => {
    if (!id || !sig) {
      setState({ kind: 'invalid' });
      return;
    }

    let active = true;
    fetch(apiUrl.newsletter(id, sig))
      .then(async (response) => {
        if (!active) return;
        if (response.status === 400 || response.status === 404) {
          setState({ kind: 'invalid' });
          return;
        }
        if (!response.ok) {
          setState({ kind: 'failed' });
          return;
        }
        const body = await response.json();
        setState({ kind: 'ready', optedIn: body.newsletter_opt_in, email: body.email ?? null });
      })
      .catch(() => {
        if (active) setState({ kind: 'failed' });
      });

    return () => {
      active = false;
    };
  }, [id, sig]);

  const change = async (optIn: boolean) => {
    if (!id || !sig) return;
    setBusy(true);
    try {
      const url = optIn ? apiUrl.newsletterResubscribe(id, sig) : apiUrl.newsletter(id, sig);
      const response = await fetch(url, { method: 'POST' });
      if (!response.ok) {
        setState({ kind: 'failed' });
        return;
      }
      const body = await response.json();
      setState({ kind: 'ready', optedIn: body.newsletter_opt_in, email: body.email ?? null });
    } catch {
      setState({ kind: 'failed' });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-[680px] px-7 pb-24 pt-[72px]">
        <div className="mb-5 flex items-center gap-3">
          <img src={brand.markRed} alt="" className="block h-[22px] w-auto" />
          <p className="eyebrow m-0 text-primary">{t('unsubscribe.eyebrow')}</p>
        </div>

        {state.kind === 'loading' && (
          <p className="m-0 text-[17px] text-ink-muted">{t('unsubscribe.loading')}</p>
        )}

        {state.kind === 'invalid' && (
          <Panel
            title={t('unsubscribe.invalidTitle')}
            body={t('unsubscribe.invalidBody', { email: configUrl.contactEmail })}
          />
        )}

        {state.kind === 'failed' && (
          <Panel title={t('unsubscribe.failedTitle')} body={t('unsubscribe.failedBody')} />
        )}

        {state.kind === 'ready' && (
          <Panel
            title={state.optedIn ? t('unsubscribe.confirmTitle') : t('unsubscribe.doneTitle')}
            body={state.optedIn ? t('unsubscribe.confirmBody') : t('unsubscribe.doneBody')}
            email={state.email}
          >
            <button
              type="button"
              disabled={busy}
              onClick={() => change(!state.optedIn)}
              className={
                state.optedIn
                  ? 'btn btn-primary disabled:opacity-50'
                  : 'btn btn-outline disabled:opacity-50'
              }
            >
              {state.optedIn ? t('unsubscribe.confirmCta') : t('unsubscribe.undoCta')}
            </button>
          </Panel>
        )}

        <Link to="/" className="mt-8 inline-block text-[15px] font-bold text-primary-ink">
          {t('unsubscribe.backHome')}
        </Link>
      </div>
    </section>
  );
}

function Panel({
  title,
  body,
  email,
  children,
}: {
  title: string;
  body: string;
  email?: string | null;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface px-8 py-9">
      <h1 className="m-0 mb-4 font-display text-[28px] font-extrabold leading-[1.2] md:text-[34px]">
        {title}
      </h1>
      <p className="m-0 text-[17px] leading-[1.75] text-ink-soft">{body}</p>
      {email && (
        <p className="m-0 mt-4 rounded-[10px] bg-surface-alt px-4 py-3 text-[15px] font-semibold">
          {email}
        </p>
      )}
      {children && <div className="mt-7">{children}</div>}
    </div>
  );
}
