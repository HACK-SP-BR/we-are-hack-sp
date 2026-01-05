import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TypingTitle } from '../components/TypingTitle';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="page-transition flex flex-col items-center justify-center min-h-[60vh] text-center">
      <TypingTitle 
        part1={t('home.title.part1')} 
        part2={t('home.title.part2')} 
      />
      <p className="text-xl md:text-2xl opacity-60 max-w-2xl mx-auto leading-relaxed">
        {t('home.subtitle')}
      </p>
    </div>
  );
};
