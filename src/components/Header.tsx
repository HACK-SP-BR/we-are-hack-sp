import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Sun, Moon, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { configUrl } from "../config/config.ts";
import hDark from '../assets/h_dark.svg';
import hLight from '../assets/h_light.svg';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/hackathons", label: t('nav.hackathons') },
    { to: "/about", label: t('nav.about') },
    { to: "/transparency", label: t('nav.transparency') },
    { to: "/support", label: t('nav.support') },
    { to: "/faq", label: t('nav.faq') },
  ];

  return (
    <header className="sticky top-0 z-[50] border-b border-border px-6 md:px-12 py-4 bg-background">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <img 
            src={theme === 'dark' ? hDark : hLight} 
            alt="Hack-SP Logo" 
            className="h-10 transition-opacity hover:opacity-80" 
          />
        </Link>
        
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="no-underline text-foreground/70 font-medium transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
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
          <div className="hidden sm:flex items-center gap-4 md:gap-6">
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

          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border py-6 px-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-300 ease-out">
          {navLinks.map((link, index) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="no-underline text-foreground/70 font-medium text-lg animate-in fade-in slide-in-from-left-4 fill-mode-both"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href={configUrl.joinUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-3 rounded-xl font-bold text-center animate-in fade-in slide-in-from-left-4 fill-mode-both"
            style={{ animationDelay: `${navLinks.length * 50}ms` }}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.join')}
          </a>
          
          <div className="flex items-center justify-between pt-4 border-t border-border animate-in fade-in duration-500 delay-200">
            <div className="flex gap-6">
              <a href={configUrl.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground">
                <Github size={24} />
              </a>
              <button 
                onClick={toggleTheme} 
                className="text-foreground"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
            <button 
              onClick={toggleLanguage} 
              className="bg-transparent border border-foreground text-foreground px-4 py-1.5 rounded font-semibold"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
