import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, ExternalLink, Code } from 'lucide-react';

export const Transparency: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="page-transition max-w-4xl mx-auto py-12 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-6xl font-bold">{t('home.transparency.title')}</h1>
        <p className="text-2xl opacity-70">
          {t('home.transparency.p1')}
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-background/80 backdrop-blur-md p-8 rounded-3xl border border-border shadow-xl hover:shadow-2xl transition-shadow relative z-10">
          <Shield className="text-primary mb-4" size={40} />
          <h2 className="text-2xl font-bold mb-4">{t('home.values.fiscal.title')}</h2>
          <p className="opacity-80 leading-relaxed mb-6">
            {t('home.values.fiscal.p2')}
          </p>
          <a 
            href="https://hcb.hackclub.com/hack-sp/transactions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            {t('home.transparency.linkLabel')} <ExternalLink size={16} />
          </a>
        </div>

        <div className="bg-background/80 backdrop-blur-md p-8 rounded-3xl border border-border shadow-xl hover:shadow-2xl transition-shadow relative z-10">
          <Code className="text-primary mb-4" size={40} />
          <h2 className="text-2xl font-bold mb-4">Open Source</h2>
          <p className="opacity-80 leading-relaxed">
            {t('home.values.opensource.p1')}
          </p>
        </div>
      </div>

      <section className="space-y-8 bg-background/80 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-border shadow-xl relative z-10">
        <h2 className="text-3xl font-bold border-l-4 border-primary pl-6">
          {t('home.values.whatIs.title').includes('O que') ? 'O que o Hack Club faz?' : 'What does Hack Club do?'}
        </h2>
        <p className="text-lg opacity-80 leading-relaxed">
          {t('home.transparency.p1').split('. ').slice(1).join('. ')}
        </p>
      </section>
    </div>
  );
};