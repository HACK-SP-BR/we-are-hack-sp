"use client"

import { ArrowRight } from "lucide-react"
import { HackSPLayout } from "../../components/HackSPLayout"

export default function ContactPage() {
  return (
    <HackSPLayout
      render={(t) => (
        <main>
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
        </main>
      )}
    />
  )
}
