import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TypingTitle } from '../components/TypingTitle';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { t } = useLanguage();

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

      <section className="w-full max-w-7xl mx-auto space-y-32 py-16 px-4">
        {/* Quem somos? */}
        <div className="space-y-12 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold border-l-8 border-primary pl-8 mb-12">
            {t('home.who.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-16 text-2xl opacity-90 leading-relaxed">
            <div className="space-y-8">
              <p className="font-medium text-foreground">{t('home.who.p1')}</p>
              <p>{t('home.who.p2')}</p>
            </div>
            <div className="space-y-8">
              <p>{t('home.who.p3')}</p>
              <p>{t('home.who.p4')}</p>
              <p className="text-xl opacity-70 italic border-t border-border pt-8">{t('home.who.p5')}</p>
            </div>
          </div>
          <div className="pt-12 flex justify-center md:justify-start">
            <Link 
              to="/about" 
              className="group inline-flex items-center gap-3 bg-foreground/5 backdrop-blur-sm border border-border px-8 py-4 rounded-full font-bold text-xl hover:bg-foreground/10 transition-all"
            >
              {t('home.transparency.more')} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
