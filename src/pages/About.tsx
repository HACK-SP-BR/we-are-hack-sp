import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="page-transition">
      <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg opacity-80">
            {t('about.p')}
        </p>
      </div>
    </div>
  );
};
