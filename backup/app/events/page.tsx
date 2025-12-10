"use client"

import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { HackSPLayout } from "../../components/HackSPLayout"

export default function EventsPage() {
  return (
    <HackSPLayout
      render={(t) => (
        <main>
          <section className="section section-alt">
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
            </div>
          </section>
        </main>
      )}
    />
  )
}
