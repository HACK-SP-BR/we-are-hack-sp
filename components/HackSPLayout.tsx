"use client"

import { useState, useEffect } from "react"
import { Globe, Mail, Instagram, Github, Sun, Moon } from "lucide-react"
import Link from "next/link"

type Lang = "pt" | "en"

const content = {
  pt: {
    nav: {
      about: "Sobre",
      events: "Eventos",
      pastEvents: "Eventos Passados",
      contact: "Contato",
    },
    hero: {
      title: "Hackathons gratuitos para estudantes do ensino médio",
      subtitle:
        "Construindo o futuro através do código, amizade e comunidade em São Paulo",
      cta: "Participar",
      learn: "Saiba Mais",
    },
    about: {
      title: "O que é Hack SP?",
      description:
        "Hack SP é uma organização dedicada a criar experiências incríveis de hackathon para estudantes do ensino médio em São Paulo. Acreditamos que todo jovem merece a oportunidade de aprender a programar, fazer amigos e construir projetos incríveis - tudo de graça!",
    },
    values: {
      title: "Nossos Valores",
      free: {
        title: "Sempre Gratuito",
        description: "Todos os nossos eventos são 100% gratuitos para estudantes",
      },
      inclusive: {
        title: "Acolhedor & Inclusivo",
        description: "Todos são bem-vindos, independente do nível de experiência",
      },
    },
    events: {
      title: "Próximos Eventos",
      location: "São Paulo, SP",
      register: "Inscrever-se",
      coming: "Janeiro 2026",
      viewPast: "Ver Eventos Passados",
    },
    pastEvents: {
      title: "Eventos Passados",
      subtitle:
        "Celebrando nossa jornada e as incríveis experiências que criamos juntos",
      participants: "Participantes",
      projects: "Projetos",
      officialVideo: "Vídeo Oficial",
      website: "Site do Evento",
      events: [
        {
          name: "Daydream São Paulo por Hack SP",
          date: "Setembro 2025",
          location:
            "Instituto de Matemática, Estatística e Ciência da Computação da Universidade de São Paulo, São Paulo, SP",
          participants: 12,
          projects: 3,
          description:
            "Em parceria com USPCodeLab e Hack Club, fizemos o Daydream São Paulo, parte de uma rede de hackathons simultâneos ao redor do globo. Recebemos João Terra (Fundação Estudar) e Rodrigo Terron.",
          highlights: ["Game Jam", "Workshops"],
          videoUrl: "https://youtu.be/cVLTBsyJduM",
          websiteUrl: "https://daydream.hackclub.com/sao-paulo",
        },
      ],
    },
    cta: {
      title: "Pronto para começar sua jornada?",
      description:
        "Junte-se a centenas de estudantes que já descobriram o poder da programação",
      button: "Se inscreva!",
    },
    footer: {
      tagline: "Construindo o futuro, uma linha de código por vez",
      rights: "Todos os direitos reservados",
      connect: "Conecte-se",
      quickLinks: "Links Rápidos",
    },
  },
  en: {
    nav: {
      about: "About",
      events: "Events",
      pastEvents: "Past Events",
      contact: "Contact",
    },
    hero: {
      title: "Free hackathons for high school students",
      subtitle:
        "Building the future through code, friendship, and community in São Paulo",
      cta: "Join Us",
      learn: "Learn More",
    },
    about: {
      title: "What is Hack SP?",
      description:
        "Hack SP is an organization dedicated to creating amazing hackathon experiences for high school students in São Paulo. We believe every young person deserves the opportunity to learn coding, make friends, and build incredible projects - all for free!",
    },
    values: {
      title: "Our Values",
      free: {
        title: "Always Free",
        description: "All our events are 100% free for students",
      },
      inclusive: {
        title: "Welcoming & Inclusive",
        description: "Everyone is welcome, regardless of experience level",
      },
    },
    events: {
      title: "Upcoming Events",
      location: "São Paulo, SP",
      register: "Register",
      coming: "January 2026",
      viewPast: "View Past Events",
    },
    pastEvents: {
      title: "Past Events",
      subtitle:
        "Celebrating our journey and the amazing experiences we've created together",
      participants: "Participants",
      projects: "Projects",
      officialVideo: "Official Video",
      website: "Event Website",
      events: [
        {
          name: "Daydream São Paulo by Hack SP",
          date: "September 2025",
          location:
            "Institute of Mathematics, Statistics and Computer Science, University of São Paulo, São Paulo, SP",
          participants: 12,
          projects: 3,
          description:
            "In partnership with USPCodeLab and Hack Club, we organized Daydream São Paulo, part of a network of simultaneous hackathons around the globe. We hosted João Terra (Fundação Estudar) and Rodrigo Terron.",
          highlights: ["Game Jam", "Workshops"],
          videoUrl: "https://youtu.be/cVLTBsyJduM",
          websiteUrl: "https://daydream.hackclub.com/sao-paulo",
        },
      ],
    },
    cta: {
      title: "Ready to start your journey?",
      description:
        "Join hundreds of students who have already discovered the power of coding",
      button: "Join the Community",
    },
    footer: {
      tagline: "Building the future, one line of code at a time",
      rights: "All rights reserved",
      connect: "Connect",
    },
  },
}

type Translations = (typeof content)["pt"]

interface HackSPLayoutProps {
  render: (t: Translations) => React.ReactNode
}

export function HackSPLayout({ render }: HackSPLayoutProps) {
  const [lang, setLang] = useState<Lang>("pt")
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [isDarkMode])

  const t = content[lang]

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <div className="logo-container">
            <Link href="/" className="logo-text">
              Hack <span className="logo-highlight">SP</span>
            </Link>
          </div>

          <div className="nav-links">
            <Link href="/#about" className="nav-link">
              {t.nav.about}
            </Link>
            <Link href="/events" className="nav-link">
              {t.nav.events}
            </Link>
            <Link href="/past-events" className="nav-link">
              {t.nav.pastEvents}
            </Link>
            <Link href="/contact" className="nav-link">
              {t.nav.contact}
            </Link>
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="icon" /> : <Moon className="icon" />}
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            >
              <Globe className="icon" />
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <a
              href="https://forms.fillout.com/t/sXW7gt9yeBus"
              className="btn btn-primary"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </nav>

      {/* Aqui entra o conteúdo da página */}
      {render(t)}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="logo-container" style={{ marginBottom: "1rem" }}>
                <span className="logo-text">
                  Hack <span className="logo-highlight">SP</span>
                </span>
              </div>
              <p className="footer-tagline">{t.footer.tagline}</p>
            </div>

            <div className="footer-section">
              <h3>{t.footer.quickLinks}</h3>
              <div className="footer-links">
                <Link href="/#about" className="footer-link">
                  {t.nav.about}
                </Link>
                <Link href="/events" className="footer-link">
                  {t.nav.events}
                </Link>
                <Link href="/past-events" className="footer-link">
                  {t.nav.pastEvents}
                </Link>
                <Link href="/contact" className="footer-link">
                  {t.nav.contact}
                </Link>
              </div>
            </div>

            <div className="footer-section">
              <h3>{t.footer.connect}</h3>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/hacksp_org/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="icon" />
                </a>
                <a
                  href="https://github.com/HACK-SP-BR/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="icon" />
                </a>
                <a href="mailto:contato@hacksp.org" className="social-link">
                  <Mail className="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Hack SP. {t.footer.rights}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
