import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Terminal, Github, Moon, Sun } from 'lucide-react';
import clsx from 'clsx';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const navItems = [
        { name: 'Hackathons', path: '/hackathons' },
        { name: 'About', path: '/about' },
        { name: 'Community', path: '/community' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="relative border-b-2 border-neutral-soft dark:border-color-neutral-xsoft bg-neutral-xxsoft dark:bg-color-background-strong">
                <div className="container mx-auto px-lg md:px-xl">
                    <div className="flex h-28 md:h-32 items-center justify-between gap-xl">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="group intro-x flex items-center gap-lg font-bold text-3xl md:text-4xl tracking-tighter transition-all hover:scale-105 active:scale-95 tap-highlight flex-shrink-0"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-xl)] bg-color-primary text-white shadow-lg tap-highlight group-hover:shadow-color-primary/50">
                                <Terminal size={28} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
                            </div>
                            <div className="flex flex-col leading-none hidden sm:block">
                                <span className="text-color-neutral-xxstrong dark:text-color-neutral-xxsoft">
                                    HACK
                                </span>
                                <span className="text-color-cta font-black">
                                    SP
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-xl flex-1 justify-center">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={clsx(
                                        "intro-x group relative px-xl py-lg text-lg font-bold text-color-neutral-medium dark:text-color-neutral-strong transition-all hover:text-color-primary dark:hover:text-color-primary rounded-[var(--radius-lg)] hover:bg-color-primary-soft/10 dark:hover:bg-color-primary-soft/20 tap-highlight whitespace-nowrap",
                                        index % 2 === 0 ? "" : "-intro-x"
                                    )}
                                >
                                    {item.name}
                                    <span className="absolute bottom-2 left-spacing-xl h-1.5 w-0 bg-color-primary rounded-full transition-all group-hover:w-[calc(100%-32px)]" />
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-lg flex-shrink-0">
                            {/* Dark Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                className="intro-x hidden sm:flex items-center justify-center w-12 h-12 rounded-[var(--radius-lg)] text-color-neutral-medium hover:text-color-primary hover:bg-color-primary-soft/10 dark:hover:bg-color-primary-soft/20 transition-all tap-highlight"
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? (
                                    <Sun size={24} />
                                ) : (
                                    <Moon size={24} />
                                )}
                            </button>

                            {/* GitHub Link */}
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="intro-x hidden sm:flex p-lg text-color-neutral-medium hover:text-color-primary transition-colors rounded-[var(--radius-lg)] hover:bg-color-primary-soft/10 dark:hover:bg-color-primary-soft/20 tap-highlight"
                            >
                                <Github size={24} />
                            </a>

                            {/* CTA Button */}
                            <Link
                                to="/login"
                                className="intro-x inline-flex h-12 items-center justify-center rounded-[var(--radius-lg)] bg-color-cta px-xl py-lg text-base font-bold text-white shadow-lg hover:shadow-xl hover:opacity-90 hover:-translate-y-1 transition-all tap-highlight active:scale-95 whitespace-nowrap"
                            >
                                Join Now
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden p-lg text-color-neutral-strong dark:text-color-neutral-xsoft hover:text-color-primary transition-colors hover:bg-color-primary-soft/10 dark:hover:bg-color-primary-soft/20 rounded-[var(--radius-lg)] tap-highlight"
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={clsx(
                        "fixed inset-x-0 top-28 md:top-32 z-40 border-t-2 border-neutral-soft dark:border-color-neutral-xsoft bg-neutral-xxsoft dark:bg-color-background-strong transition-all duration-300 lg:hidden overflow-hidden",
                        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                    )}
                >
                    <div className="container mx-auto px-lg py-xl flex flex-col gap-lg">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={clsx(
                                    "intro-y flex items-center justify-between rounded-[var(--radius-lg)] p-lg text-xl font-bold text-color-neutral-medium dark:text-color-neutral-strong hover:bg-color-primary-soft/10 dark:hover:bg-color-primary-soft/20 hover:text-color-primary transition-all group tap-highlight",
                                    index % 2 === 0 ? "-intro-x" : "intro-x"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span>{item.name}</span>
                                <div className="h-1.5 w-0 bg-color-primary rounded-full group-hover:w-8 transition-all" />
                            </Link>
                        ))}
                        <div className="pt-xl mt-lg border-t-2 border-neutral-soft dark:border-color-neutral-xsoft flex gap-lg">
                            <button
                                onClick={toggleDarkMode}
                                className="intro-y flex-1 flex items-center justify-center rounded-[var(--radius-lg)] p-lg text-base font-bold bg-color-primary-soft/10 dark:bg-color-primary-soft/20 text-color-primary hover:bg-color-primary-soft/20 dark:hover:bg-color-primary-soft/30 transition-colors tap-highlight"
                            >
                                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="intro-y flex-1 flex items-center justify-center rounded-[var(--radius-lg)] p-lg text-base font-bold bg-color-primary-soft/10 dark:bg-color-primary-soft/20 text-color-primary hover:bg-color-primary-soft/20 dark:hover:bg-color-primary-soft/30 transition-colors tap-highlight"
                            >
                                <Github size={24} />
                            </a>
                            <Link
                                to="/login"
                                className="intro-y flex-1 flex items-center justify-center rounded-[var(--radius-lg)] bg-color-cta p-lg text-base font-bold text-white shadow hover:shadow-lg hover:opacity-90 transition-all tap-highlight active:scale-95"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Join Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
