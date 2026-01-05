import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Send, Mail } from 'lucide-react';

export const Support: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <div className="page-transition max-w-4xl mx-auto py-12 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-6xl font-bold">{language === 'pt' ? 'Apoie o Hack SP' : 'Support Hack SP'}</h1>
        <p className="text-2xl opacity-70">
          {t('about.support')}
        </p>
      </section>

      <div className="bg-primary/5 border border-primary/20 p-10 rounded-[2.5rem] space-y-8">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Heart className="text-primary fill-primary" />
          {language === 'pt' ? 'Por que nos apoiar?' : 'Why support us?'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-lg opacity-80">
          <p>
            {language === 'pt' 
              ? 'Seu apoio viabiliza alimentação, prêmios e infraestrutura para adolescentes de diversas origens participarem de eventos gratuitos.'
              : 'Your support enables food, prizes, and infrastructure for teenagers from all backgrounds to participate in free events.'}
          </p>
          <p>
            {language === 'pt'
              ? 'Ao patrocinar, você se conecta com a próxima geração de talentos em tecnologia e inovação em São Paulo.'
              : 'By sponsoring, you connect with the next generation of tech and innovation talent in São Paulo.'}
          </p>
        </div>
      </div>

      <section className="text-center space-y-8 py-12">
        <h2 className="text-3xl font-bold">{language === 'pt' ? 'Gostaria de saber mais?' : 'Want to know more?'}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:contact@hacksp.org" 
            className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform"
          >
            <Mail size={24} />
            {language === 'pt' ? 'Solicite o Mídia Kit' : 'Request Media Kit'}
          </a>
          <a 
            href="https://hcb.hackclub.com/hack-sp/donate" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-foreground/5 border border-border px-8 py-4 rounded-full font-bold text-xl hover:bg-foreground/10 transition-all"
          >
            <Send size={24} />
            {language === 'pt' ? 'Fazer uma doação' : 'Make a donation'}
          </a>
        </div>
      </section>
    </div>
  );
};