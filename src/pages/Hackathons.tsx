import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export const Hackathons: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <div className="page-transition max-w-6xl mx-auto py-12 space-y-20">
      <section className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">{t('hackathons.title')}</h1>
        <p className="text-xl opacity-70 bg-primary/5 p-6 rounded-xl border-l-4 border-primary shadow-lg shadow-primary/5">
          {t('hackathons.p')}
        </p>
      </section>

      <section className="space-y-12">
        <h2 className="text-4xl font-bold border-b border-border pb-4">
          {t('hackathons.past.title')}
        </h2>
        
        <Link 
          to="/events/daydream-sp"
          className="block bg-background/60 dark:bg-background/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-border/50 overflow-hidden relative group transition-all hover:scale-[1.01] duration-500 shadow-2xl shadow-black/5 dark:shadow-white/5"
        >
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl font-bold">Daydream São Paulo</h3>
            <p className="text-lg opacity-80 max-w-2xl">
              {t('hackathons.past.p1')}
            </p>
            
            <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
              {language === 'pt' ? 'Ver detalhes do evento' : 'View event details'}
              <ArrowRight size={20} />
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32 rounded-full group-hover:bg-primary/10 transition-colors" />
        </Link>
      </section>
    </div>
  );
};
