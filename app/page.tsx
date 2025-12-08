"use client"

import { ArrowRight } from "lucide-react"
import { HackSPLayout } from "../components/HackSPLayout"

export default function HomePage() {
  return (
    <HackSPLayout
      render={(t) => (
        <main>
          {/* HERO / HOME */}
          <section className="hero">
            <div className="hero-bg">
              <div className="hero-bg-circle-1" />
              <div className="hero-bg-circle-2" />
            </div>

            <div className="container hero-content">
              <div className="badge">
                <span className="badge-text">São Paulo, Brasil </span>
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

          {/* ABOUT */}
          <section id="about" className="section section-alt">
            <div className="container section-content">
              <h2 className="section-title">{t.about.title}</h2>
              <p className="section-text">{t.about.description}</p>
            </div>
          </section>
        </main>
      )}
    />
  )
}
