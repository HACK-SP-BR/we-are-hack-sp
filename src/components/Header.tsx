import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import hDark from '../assets/h-dark.svg';
import hLight from '../assets/h-light.svg';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-8 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={theme === 'dark' ? hDark : hLight} 
            alt="Hack-SP Logo" 
            className="h-10 transition-opacity hover:opacity-80" 
          />
        </Link>
        
        <nav className="flex gap-8">
          <Link to="/hackathons" className="no-underline text-foreground font-medium transition-opacity hover:opacity-70">
            {t('nav.hackathons')}
          </Link>
          <Link to="/about" className="no-underline text-foreground font-medium transition-opacity hover:opacity-70">
            {t('nav.about')}
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <a href="https://github.com/hack-sp" target="_blank" rel="noopener noreferrer" className="text-foreground flex items-center hover:opacity-70 transition-opacity">
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
