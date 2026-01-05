import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hackathons: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="page-transition">
      <h1 className="text-4xl font-bold mb-6">{t('hackathons.title')}</h1>
      <p className="text-lg opacity-80">{t('hackathons.p')}</p>
    </div>
  );
};
