import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { configUrl } from "../config/config.ts";
import hDark from '../assets/h_dark.svg';
import hLight from '../assets/h_light.svg';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-[20] border-b border-border px-6 md:px-12 py-4 bg-background/95 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={theme === 'dark' ? hDark : hLight} 
            alt="Hack-SP Logo" 
            className="h-10 transition-opacity hover:opacity-80" 
          />
        </Link>
        
        <nav className="hidden lg:flex gap-8 items-center">
          <Link to="/hackathons" className="no-underline text-foreground/70 font-medium transition-colors hover:text-foreground">
            {t('nav.hackathons')}
          </Link>
          <Link to="/about" className="no-underline text-foreground/70 font-medium transition-colors hover:text-foreground">
            {t('nav.about')}
          </Link>
          <Link to="/transparency" className="no-underline text-foreground/70 font-medium transition-colors hover:text-foreground">
            {t('nav.transparency')}
          </Link>
          <Link to="/support" className="no-underline text-foreground/70 font-medium transition-colors hover:text-foreground">
            {t('nav.support')}
          </Link>
          <Link to="/faq" className="no-underline text-foreground/70 font-medium transition-colors hover:text-foreground">
            {t('nav.faq')}
          </Link>
          <a 
            href={configUrl.joinUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            {t('nav.join')}
          </a>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <a href={configUrl.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground flex items-center hover:opacity-70 transition-opacity">
            <Github size={24} />
          </a>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleLanguage} 
            className="bg-transparent border border-foreground text-foreground px-3 py-1 rounded font-semibold hover:bg-foreground hover:text-background transition-colors"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </div>
    </header>
  );
};
