"use client"

import { useState, useEffect } from "react"
import { Code2, Globe, Calendar, MapPin, Users, Trophy, ArrowLeft, Sun, Moon, Video, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function PastEventsPage() {
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
      title: "Eventos Passados",
      subtitle: "Celebrando nossa jornada e as incríveis experiências que criamos juntos",
      backHome: "Voltar ao Início",
      participants: "Participantes",
      projects: "Projetos",
      officialVideo: "Vídeo Oficial",
      website: "Site do Evento",
      events: [
        {
          name: "Daydream São Paulo por Hack SP",
          date: "Setembro 2025",
          location: "Instituto de Matemática, Estatística e Ciência da Computação da Universidade de São Paulo, São Paulo, SP",
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
    en: {
      title: "Past Events",
      subtitle: "Celebrating our journey and the amazing experiences we've created together",
      backHome: "Back to Home",
      participants: "Participants",
      projects: "Projects",
      officialVideo: "Official Video",
      website: "Event Website",
      events: [
        {
          name: "Daydream São Paulo by Hack SP",
          date: "September 2025",
          location: "Institute of Mathematics, Statistics and Computer Science, University of São Paulo, São Paulo, SP",
          participants: 12,
          projects: 3,
          description: "In partnership with USPCodeLab and Hack Club, we organized Daydream São Paulo, part of a network of simultaneous hackathons around the globe. We hosted João Terra (Fundação Estudar) and Rodrigo Terron.",
          highlights: ["Game Jam", "Workshops"],
          videoUrl: "https://youtu.be/cVLTBsyJduM",
          websiteUrl: "https://daydream.hackclub.com/sao-paulo",
        },
      ],
    },
  }

  const t = content[lang]

return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <Link href="/" className="logo-container">
            {/*<div className="logo-icon">
              <Code2 className="icon-lg icon-white" />
            </div>*/}
            <span className="logo-text">
              Hack <span className="logo-highlight">SP</span>
            </span>
          </Link>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle theme">
              {isDarkMode ? <Sun className="icon" /> : <Moon className="icon" />}
            </button>
            <button className="btn btn-ghost" onClick={() => setLang(lang === "pt" ? "en" : "pt")}>
              <Globe className="icon" />
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <Link href="/">
              <button className="btn btn-outline">
                <ArrowLeft className="icon" />
                {t.backHome}
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="hero" style={{ paddingBottom: "4rem" }}>
        <div className="container hero-content">
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section">
        <div className="container">
          <div className="events-list">
            {t.events.map((event, index) => (
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
                    <p className="section-text" style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                      {event.description}
                    </p>
                    <div className="highlights">
                      {event.highlights.map((highlight, i) => (
                        <span key={i} className="highlight-tag">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
                      <a href={event.videoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <Video className="icon" />
                        {t.officialVideo}
                      </a>
                      <a href={event.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <ExternalLink className="icon" />
                        {t.website}
                      </a>
                    </div>
                  </div>

                  <div className="past-event-stats">
                    <div className="past-stat-card">
                      <Users className="icon-lg" style={{ color: "var(--color-red)", margin: "0 auto 0.5rem" }} />
                      <div className="past-stat-number">{event.participants}</div>
                      <div className="past-stat-label">{t.participants}</div>
                    </div>
                    <div className="past-stat-card">
                      <Trophy className="icon-lg" style={{ color: "var(--color-blue)", margin: "0 auto 0.5rem" }} />
                      <div className="past-stat-number">{event.projects}</div>
                      <div className="past-stat-label">{t.projects}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <div className="logo-container" style={{ justifyContent: "center", marginBottom: "1rem" }}>
            <span className="logo-text">
              Hack <span className="logo-highlight">SP</span>
            </span>
          </div>
          <p className="footer-tagline mb-2">
            {lang === "pt"
              ? "Construindo o futuro, uma linha de código por vez"
              : "Building the future, one line of code at a time"}
          </p>
          <p className="footer-copyright">
            © 2025 Hack SP. {lang === "pt" ? "Todos os direitos reservados" : "All rights reserved"}.
          </p>
        </div>
      </footer>
    </div>
  )
}
