export interface EventInfo {
  id: string;
  status: 'upcoming' | 'past';
  name: string;
  videoUrl?: string;
  websiteUrl?: string;
  registrationUrl?: string;
  bannerUrl?: string;
  googleMapsUrl?: string;
  translations: {
    pt: {
      date: string;
      location: string;
      description: string;
      locationDescription?: string;
    };
    en: {
      date: string;
      location: string;
      description: string;
      locationDescription?: string;
    };
  };
  stats?: {
    participants: string;
    projects: string;
    duration: string;
  };
  photos: string[];
  locationPhotos?: string[];
}

export type EventsMap = Record<string, EventInfo>;

const EVENTS_CDN_URL =
  'https://raw.githubusercontent.com/HACK-SP-BR/events/main/events.json';

export async function fetchEvents(): Promise<EventsMap> {
  const response = await fetch(`${EVENTS_CDN_URL}?v=${Date.now()}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);
  }

  return response.json();
}