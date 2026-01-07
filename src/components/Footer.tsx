import React from 'react';
import { Link } from 'react-router-dom';
import hackclubFlag from '../assets/hackclub_flag.svg';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  return (
      <footer className="w-full py-16 border-t border-border bg-background/80 backdrop-blur-md relative z-[2]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col gap-6 items-center md:items-start col-span-2 md:col-span-1">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <p className="text-sm opacity-60 font-medium">
                Fiscally sponsored by:
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
            <div className="text-sm opacity-40 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Hack SP</p>
              <p>Made by the community</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="font-bold text-lg mb-2">Hack SP</h4>
            <Link to="/about" className="opacity-60 hover:opacity-100 transition-opacity">{language === 'pt' ? 'Sobre' : 'About'}</Link>
            <Link to="/hackathons" className="opacity-60 hover:opacity-100 transition-opacity">Hackathons</Link>
            <Link to="/faq" className="opacity-60 hover:opacity-100 transition-opacity">FAQ</Link>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="font-bold text-lg mb-2">{language === 'pt' ? 'Recursos' : 'Resources'}</h4>
            <Link to="/transparency" className="opacity-60 hover:opacity-100 transition-opacity">{language === 'pt' ? 'Transparência' : 'Transparency'}</Link>
            <Link to="/support" className="opacity-60 hover:opacity-100 transition-opacity">{language === 'pt' ? 'Apoie' : 'Support'}</Link>
            <a href="https://hcb.hackclub.com/hack-sp/transactions" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">HCB Finanças</a>
          </div>
        </div>
      </footer>
  );
};
