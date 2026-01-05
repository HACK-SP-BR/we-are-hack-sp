import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TypingTitle } from '../components/TypingTitle';
import { ExternalLink, ArrowRight, ShieldCheck, Zap, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  
  const valueCards = [
    { title: t('home.valueCards.0.title'), desc: t('home.valueCards.0.desc'), icon: <Zap className="text-primary" size={32} /> },
    { title: t('home.valueCards.1.title'), desc: t('home.valueCards.1.desc'), icon: <Globe className="text-primary" size={32} /> },
    { title: t('home.valueCards.2.title'), desc: t('home.valueCards.2.desc'), icon: <Users className="text-primary" size={32} /> },
    { title: t('home.valueCards.3.title'), desc: t('home.valueCards.3.desc'), icon: <ShieldCheck className="text-primary" size={32} /> },
  ];

  return (
    <div className="page-transition flex flex-col items-center">
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center mb-20 px-4">
        <TypingTitle 
          part1={t('home.title.part1')} 
          part2={t('home.title.part2')} 
        />
        <p className="text-xl md:text-3xl opacity-60 max-w-3xl mx-auto leading-relaxed mb-12">
          {t('home.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link 
            to="/hackathons" 
            className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20"
          >
            {t('home.cta.primary')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/support" 
            className="flex items-center gap-2 bg-foreground/5 backdrop-blur-sm border border-border px-8 py-4 rounded-full font-bold text-lg hover:bg-foreground/10 transition-all"
          >
            {t('home.cta.secondary')}
          </Link>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto space-y-32 py-16">
        {/* Princípios */}
        <div className="space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">{t('home.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueCards.map((card, i) => (
              <div key={i} className="bg-background/60 dark:bg-background/40 backdrop-blur-md p-8 rounded-3xl border border-border/50 transition-all hover:scale-[1.05] hover:border-primary/30 group relative z-10 overflow-hidden shadow-xl shadow-black/5 dark:shadow-white/5">
                <div className="mb-6 inline-block p-4 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors relative z-10">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 relative z-10">{card.title}</h3>
                <p className="opacity-70 leading-relaxed relative z-10">{card.desc}</p>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Quem somos? */}
        <div className="bg-background/60 dark:bg-background/40 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-border/50 shadow-2xl shadow-black/5 dark:shadow-white/5 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold border-l-4 border-primary pl-6">
            {t('home.who.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-xl opacity-80 leading-relaxed">
            <p>{t('home.who.p1')}</p>
            <p>{t('home.who.p2')}</p>
          </div>
          <div className="pt-6">
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              {t('home.transparency.more')} <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Transparência */}
        <div className="bg-foreground/[0.03] dark:bg-foreground/[0.02] backdrop-blur-sm p-10 md:p-16 rounded-[3rem] border border-border/50 shadow-2xl shadow-primary/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              {t('home.transparency.title')}
            </h2>
            <p className="text-xl opacity-80 leading-relaxed">
              {t('home.transparency.p1')}
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="https://hcb.hackclub.com/hack-sp/transactions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20"
              >
                {t('home.transparency.linkLabel')}
                <ExternalLink size={18} />
              </a>
              <Link 
                to="/transparency" 
                className="flex items-center gap-2 text-foreground/60 hover:text-foreground font-bold transition-colors"
              >
                {t('home.transparency.more')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
            <ShieldCheck size={80} className="text-primary" />
          </div>
        </div>
      </section>
    </div>
  );
};
