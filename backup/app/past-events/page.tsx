"use client"

import { Calendar, MapPin, Users, Video, ExternalLink } from "lucide-react"
import { HackSPLayout } from "../../components/HackSPLayout"

export default function PastEventsPage() {
  return (
    <HackSPLayout
      render={(t) => (
        <main>
          <section className="section">
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
                        <div
                          className="event-meta"
                          style={{ marginBottom: "1.5rem" }}
                        >
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
                          <div className="past-stat-number">
                            {event.participants}
                          </div>
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
                          <div className="past-stat-label">
                            {t.pastEvents.projects}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}
    />
  )
}
