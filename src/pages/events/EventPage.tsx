import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { PlayCircle, Globe, Users, Trophy, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { events } from '../../constants/events';

export const EventPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const { t, language } = useLanguage();
  
  const event = Object.values(events).find(e => e.id === eventId);
  
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);

  if (!event) {
    return <Navigate to="/hackathons" replace />;
  }

  const content = event.translations[language as 'pt' | 'en'] || event.translations.pt;

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % event.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + event.photos.length) % event.photos.length);
  };

  return (
    <div className="page-transition max-w-5xl mx-auto py-12 space-y-20 px-4 md:px-0">
      <section className="text-center space-y-8">
        <h1 className="text-7xl font-bold">{event.name}</h1>
        <div className="flex flex-col items-center gap-4 text-xl opacity-80">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-primary" />
            <span>{t('hackathons.past.date', { date: content.date })}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-primary" />
            <span>{t('hackathons.past.location', { location: content.location })}</span>
          </div>
        </div>
        <p className="text-2xl opacity-70 max-w-3xl mx-auto">
          {content.description}
        </p>
        {content.extraInfo && (
          <p className="text-xl opacity-80 max-w-2xl mx-auto bg-primary/5 p-6 rounded-2xl border border-primary/20">
            {content.extraInfo}
          </p>
        )}
        <div className="flex justify-center flex-wrap gap-6">
          {event.videoUrl && (
            <a 
              href={event.videoUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              <PlayCircle size={24} />
              Mini Doc
            </a>
          )}
          {event.websiteUrl && (
            <a 
              href={event.websiteUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-foreground/5 border border-border px-8 py-4 rounded-full font-bold text-xl hover:bg-foreground/10 transition-all"
            >
              <Globe size={24} />
              Website
            </a>
          )}
          {event.status === 'upcoming' && event.registrationUrl && (
             <a 
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              {language === 'pt' ? 'Inscrever-se agora' : 'Register Now'}
            </a>
          )}
        </div>
      </section>

      {event.status === 'past' && event.stats && (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background/60 dark:bg-background/40 backdrop-blur-md p-8 rounded-3xl border border-border/50 text-center shadow-xl shadow-black/5 dark:shadow-white/5 transition-transform hover:scale-105">
            <Users size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-2">{event.stats.participants}</h3>
            <p className="opacity-60">{t('hackathons.past.participants')}</p>
          </div>
          <div className="bg-background/60 dark:bg-background/40 backdrop-blur-md p-8 rounded-3xl border border-border/50 text-center shadow-xl shadow-black/5 dark:shadow-white/5 transition-transform hover:scale-105">
            <Trophy size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-2">{event.stats.projects}</h3>
            <p className="opacity-60">{t('hackathons.past.projects')}</p>
          </div>
          <div className="bg-background/60 dark:bg-background/40 backdrop-blur-md p-8 rounded-3xl border border-border/50 text-center shadow-xl shadow-black/5 dark:shadow-white/5 transition-transform hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-4">{event.stats.duration}</div>
            <h3 className="text-4xl font-bold mb-2">1</h3>
            <p className="opacity-60">{t('hackathons.past.immersion')}</p>
          </div>
        </div>
      )}

      {event.photos.length > 0 && (
        <section className="space-y-12">
          <h2 className="text-4xl font-bold border-b border-border pb-4">{t('event.photos.title')}</h2>
          
          <div className="relative group max-w-4xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-[2rem] border border-border bg-foreground/5 shadow-2xl">
            {event.photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === currentPhotoIndex 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : index < currentPhotoIndex 
                      ? 'opacity-0 scale-95 -translate-x-full' 
                      : 'opacity-0 scale-95 translate-x-full'
                }`}
              >
                <img
                  src={photo}
                  alt={`${event.name} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            ))}

            {event.photos.length > 1 && (
              <>
                {/* Navigation Buttons */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/40"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/40"
                  aria-label="Next photo"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {event.photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPhotoIndex ? 'bg-white w-6' : 'bg-white/30'
                      }`}
                      aria-label={`Go to photo ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
};