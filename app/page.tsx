"use client"

import { useState, useEffect } from "react"
import {
  Code2,
  Users,
  Heart,
  Calendar,
  MapPin,
  Globe,
  Mail,
  Instagram,
  Github,
  ArrowRight,
  Sun,
  Moon,
  Video,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function HackSPPage() {
  const [lang, setLang] = useState<"pt" | "en">("pt")
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [isDarkMode])

  const content = {
    pt: {
      nav: {
        about: "Sobre",
        events: "Eventos",
        pastEvents: "Eventos Passados",
        community: "Comunidade",
        contact: "Contato",
      },
      hero: {
        title: "Hackathons gratuitos para estudantes do ensino médio",
        subtitle: "Construindo o futuro através do código, amizade e comunidade em São Paulo",
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
        community: {
          title: "Comunidade em Primeiro",
          description: "Construímos amizades duradouras através da colaboração",
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
        subtitle: "Celebrando nossa jornada e as incríveis experiências que criamos juntos",
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
        description: "Junte-se a centenas de estudantes que já descobriram o poder da programação",
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
        community: "Community",
        contact: "Contact",
      },
      hero: {
        title: "Free hackathons for high school students",
        subtitle: "Building the future through code, friendship, and community in São Paulo",
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
        community: {
          title: "Community First",
          description: "We build lasting friendships through collaboration",
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
        subtitle: "Celebrating our journey and the amazing experiences we've created together",
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
        description: "Join hundreds of students who have already discovered the power of coding",
        button: "Join the Community",
      },
      footer: {
        tagline: "Building the future, one line of code at a time",
        rights: "All rights reserved",
        connect: "Connect",
        quickLinks: "Quick Links",
      },
    },
  }

  const t = content[lang]

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <div className="logo-container">
            <span className="logo-text">
              Hack <span className="logo-highlight">SP</span>
            </span>
          </div>

          <div className="nav-links">
            <a href="#about" className="nav-link">
              {t.nav.about}
            </a>
            <a href="#events" className="nav-link">
              {t.nav.events}
            </a>
            <a href="#past-events" className="nav-link">
              {t.nav.pastEvents}
            </a>
            <a href="#community" className="nav-link">
              {t.nav.community}
            </a>
            <a href="#contact" className="nav-link">
              {t.nav.contact}
            </a>
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

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-circle-1" />
          <div className="hero-bg-circle-2" />
        </div>

        <div className="container hero-content">
          <div className="badge">
            <span className="badge-text">São Paulo, Brasil 🇧🇷</span>
          </div>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-buttons">
            <a
              href="https://forms.fillout.com/t/sXW7gt9yeBus"
              className="btn btn-primary btn-lg"
            >
              {t.hero.cta}
              <ArrowRight className="icon" />
            </a>
            <a href="#about" className="btn btn-outline btn-lg">
              {t.hero.learn}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container section-content">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-text">{t.about.description}</p>
        </div>
      </section>

      {/* Values Section */}
      <section id="community" className="section">
        <div className="container">
          <h2 className="section-title">{t.values.title}</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <Heart className="icon-lg icon-white" />
              </div>
              <h3 className="card-title">{t.values.free.title}</h3>
              <p className="card-text">{t.values.free.description}</p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Users className="icon-lg icon-white" />
              </div>
              <h3 className="card-title">{t.values.community.title}</h3>
              <p className="card-text">{t.values.community.description}</p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Code2 className="icon-lg icon-white" />
              </div>
              <h3 className="card-title">{t.values.inclusive.title}</h3>
              <p className="card-text">{t.values.inclusive.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t.events.title}</h2>
          <div className="event-card">
            <div className="event-header">
              <div className="event-icon">
                <Calendar className="icon-lg icon-white" />
              </div>
              <div className="event-info">
                <h3 className="event-title">Summer 26 by Hack SP</h3>
                <div className="event-meta">
                  <div className="event-meta-item">
                    <MapPin className="icon" />
                    <span>{t.events.location}</span>
                  </div>
                </div>
                <p className="event-description">{t.events.coming}</p>
                <a
                  href="https://forms.fillout.com/t/sXW7gt9yeBus"
                  className="btn btn-primary btn-full"
                >
                  {t.events.register}
                  <ArrowRight className="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: "2rem" }}>
            <a href="#past-events">
              <button className="btn btn-outline">
                {t.events.viewPast}
                <ArrowRight className="icon" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section id="past-events" className="section">
        <div className="container">
          <h2 className="section-title">{t.pastEvents.title}</h2>
          <p className="section-text" style={{ marginBottom: "3rem" }}>
            {t.pastEvents.subtitle}
          </p>

          <div className="events-list">
            {t.pastEvents.events.map((event, index) => (
              <div key={index} className="past-event-card">
                <div className="past-event-grid">
                  <div className="past-event-info">
                    <h2>{event.name}</h2>
                    <div className="event-meta" style={{ marginBottom: "1.5rem" }}>
                      <div className="event-meta-item">
                        <Calendar className="icon" />
                        <span>{event.date}</span>
                      </div>
                      <div className="event-meta-item">
                        <MapPin className="icon" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p
                      className="section-text"
                      style={{ textAlign: "left", marginBottom: "1.5rem" }}
                    >
                      {event.description}
                    </p>
                    <div className="highlights">
                      {event.highlights.map((highlight, i) => (
                        <span key={i} className="highlight-tag">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "1.5rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <a
                        href={event.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <Video className="icon" />
                        {t.pastEvents.officialVideo}
                      </a>
                      <a
                        href={event.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        <ExternalLink className="icon" />
                        {t.pastEvents.website}
                      </a>
                    </div>
                  </div>

                  <div className="past-event-stats">
                    <div className="past-stat-card">
                      <Users
                        className="icon-lg"
                        style={{
                          color: "var(--color-red)",
                          margin: "0 auto 0.5rem",
                        }}
                      />
                      <div className="past-stat-number">{event.participants}</div>
                      <div className="past-stat-label">
                        {t.pastEvents.participants}
                      </div>
                    </div>
                    <div className="past-stat-card">
                      <Calendar
                        className="icon-lg"
                        style={{
                          color: "var(--color-blue)",
                          margin: "0 auto 0.5rem",
                        }}
                      />
                      <div className="past-stat-number">{event.projects}</div>
                      <div className="past-stat-label">{t.pastEvents.projects}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section">
        <div className="container section-content">
          <h2 className="section-title">{t.cta.title}</h2>
          <p className="section-text" style={{ marginBottom: "3rem" }}>
            {t.cta.description}
          </p>
          <a
            href="https://forms.fillout.com/t/sXW7gt9yeBus"
            className="btn btn-primary btn-lg"
          >
            {t.cta.button}
            <ArrowRight className="icon" />
          </a>
        </div>
      </section>

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
                <a href="#about" className="footer-link">
                  {t.nav.about}
                </a>
                <a href="#events" className="footer-link">
                  {t.nav.events}
                </a>
                <a href="#past-events" className="footer-link">
                  {t.nav.pastEvents}
                </a>
                <a href="#community" className="footer-link">
                  {t.nav.community}
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>{t.footer.connect}</h3>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/hacksp_org/"
                  className="social-link"
                >
                  <Instagram className="icon" />
                </a>
                <a
                  href="https://github.com/HACK-SP-BR/"
                  className="social-link"
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
