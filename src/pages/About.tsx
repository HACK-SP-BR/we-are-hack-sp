import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <div className="page-transition max-w-5xl mx-auto py-12 space-y-20">
      <section className="text-center space-y-8">
        <h1 className="text-7xl font-bold">
          {t('about.title')}
        </h1>
        <p className="text-2xl opacity-70 max-w-3xl mx-auto leading-relaxed">
          {t('about.p1')}
        </p>
      </section>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start text-lg opacity-80 leading-relaxed">
        <div className="space-y-8">
          <p>
            {t('about.p2')}
          </p>

          <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl italic">
            <p>
              {t('about.p3')}
            </p>
          </div>
        </div>

        <div className="space-y-8 bg-foreground/[0.03] p-10 rounded-3xl border border-border">
          <p className="text-2xl font-semibold opacity-100 text-primary">
            {t('about.p4')}
          </p>
          <div className="flex flex-col gap-6 items-center text-center pt-8 border-t border-border/50">
            <Heart className="text-primary animate-pulse" size={48} fill="currentColor" />
            <p className="text-xl font-medium">
              {t('about.support')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/support" 
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                {language === 'pt' ? 'Como apoiar' : 'How to support'}
              </Link>
              <a 
                href="mailto:contact@hacksp.org" 
                className="bg-foreground/5 border border-border px-8 py-3 rounded-full font-bold hover:bg-foreground/10 transition-all"
              >
                {language === 'pt' ? 'Contato' : 'Contact'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
