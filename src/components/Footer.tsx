import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import hackclubFlag from '../assets/hackclub_flag.svg';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
      <footer className="w-full py-12 border-t border-border bg-background/80 backdrop-blur-md relative z-[2]">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-sm opacity-60 font-medium">
              {t('footer.fiscal')}
            </p>
            <a
                href="https://hackclub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
            >
              <img
                  src={hackclubFlag}
                  alt="Hack Club Flag"
                  className="h-12"
              />
            </a>
          </div>

          <div className="text-sm opacity-40">
            <p>© {new Date().getFullYear()} Hack-SP</p>
            <p>Made by the community</p>
          </div>
        </div>
      </footer>
  );
};
