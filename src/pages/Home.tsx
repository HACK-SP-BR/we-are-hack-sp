import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="page-transition">
      <h1 className="text-5xl font-bold mb-4">{t('home.title')}</h1>
      <p className="text-xl opacity-80">{t('home.subtitle')}</p>
    </div>
  );
};
