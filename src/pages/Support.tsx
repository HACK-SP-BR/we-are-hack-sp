import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Send, Mail } from 'lucide-react';
import { configUrl } from '../config/config';

export const Support: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="page-transition max-w-4xl mx-auto py-12 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-6xl font-bold">{t('support.title')}</h1>
        <p className="text-2xl opacity-70">
          {t('about.support')}
        </p>
      </section>

      <div className="bg-primary/5 border border-primary/20 p-10 rounded-[2.5rem] space-y-8">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Heart className="text-primary fill-primary" />
          {t('support.why')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-lg opacity-80">
          <p>
            {t('support.reason1')}
          </p>
          <p>
            {t('support.reason2')}
          </p>
        </div>
      </div>

      <section className="text-center space-y-8 py-12">
        <h2 className="text-3xl font-bold">{t('support.more')}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href={configUrl.donationUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform"
          >
            <Send size={24} />
            {t('support.donate')}
          </a>
          <a 
            href={`mailto:${configUrl.contactEmail}`} 
            className="flex items-center gap-3 bg-foreground/5 border border-border px-8 py-4 rounded-full font-bold text-xl hover:bg-foreground/10 transition-all"
          >
            <Mail size={24} />
            {t('support.contact')}
          </a>
        </div>
      </section>
    </div>
  );
};