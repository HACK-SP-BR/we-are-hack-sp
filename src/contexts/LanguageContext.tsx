import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    "nav.hackathons": "Hackathons",
    "nav.about": "Sobre",
    "home.title": "Bem-vindo ao Hack-SP",
    "home.subtitle": "A comunidade hacker sem fins lucrativos de São Paulo.",
    "about.title": "Sobre nós",
    "about.p": "O Hack-SP é uma comunidade de hackathons e tecnologia no estado de São Paulo.",
    "hackathons.title": "Nossos Hackathons",
    "hackathons.p": "Confira os próximos eventos e hackathons em São Paulo.",
  },
  en: {
    "nav.hackathons": "Hackathons",
    "nav.about": "About",
    "home.title": "Welcome to Hack-SP",
    "home.subtitle": "The non-profit hacker community in São Paulo.",
    "about.title": "About Us",
    "about.p":
        "Hack-SP is a community focused on fostering a culture of hackathons and technology in the state of São Paulo.",
    "hackathons.title": "Our Hackathons",
    "hackathons.p": "Check out the upcoming events and hackathons in São Paulo.",
  },
} as const;

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  const value = useMemo(() => ({ language, toggleLanguage, t }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
