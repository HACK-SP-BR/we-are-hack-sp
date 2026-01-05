export const translations = {
  pt: {
    "nav.hackathons": "Hackathons",
    "nav.about": "Sobre",
    "home.title.part1": "Hack",
    "home.title.part2": "SP",
    "home.subtitle": "Hackathons feitos por e para estudantes do Ensino Médio em São Paulo.",
    "about.title": "Sobre nós",
    "about.p": "O Hack-SP é uma comunidade de hackathons e tecnologia no estado de São Paulo.",
    "hackathons.title": "Nossos Hackathons",
    "hackathons.p": "Confira os próximos eventos e hackathons em São Paulo.",
    "footer.fiscal": "Afiliação e patrocínio fiscal:",
  },
  en: {
    "nav.hackathons": "Hackathons",
    "nav.about": "About",
    "home.title.part1": "Hack",
    "home.title.part2": "SP",
    "home.subtitle": "Hackathons made by and for high school students in São Paulo.",
    "about.title": "About Us",
    "about.p":
        "Hack-SP is a community focused on fostering a culture of hackathons and technology in the state of São Paulo.",
    "hackathons.title": "Our Hackathons",
    "hackathons.p": "Check out the upcoming events and hackathons in São Paulo.",
    "footer.fiscal": "Affiliated with and fiscally sponsored by:",
  },
} as const;

export type Language = "pt" | "en";
export type TranslationKey = keyof typeof translations['pt'];
