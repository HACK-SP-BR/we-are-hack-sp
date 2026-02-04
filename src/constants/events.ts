import daydream_event1 from '../assets/events/daydream-sp/event1.jpeg';
import daydream_event2 from '../assets/events/daydream-sp/event2.jpeg';
import daydream_event3 from '../assets/events/daydream-sp/event3.jpeg';
import daydream_event4 from '../assets/events/daydream-sp/event4.jpeg';
import daydream_event5 from '../assets/events/daydream-sp/event5.jpeg';
import drx_banner from '../assets/events/drx_hacksp/drx_banner.jpg';

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

export const events: Record<string, EventInfo> = {
  daydream: {
    id: 'daydream-sp',
    status: 'past',
    name: 'Daydream São Paulo',
    videoUrl: 'https://youtu.be/cVLTBsyJduM',
    websiteUrl: 'https://daydream.hackclub.com/sao-paulo',
    translations: {
      pt: {
        date: 'Setembro de 2025',
        location: 'IME-USP, São Paulo',
        description: 'Em parceria com USPCodeLab e Hack Club, fizemos o Daydream São Paulo, parte de uma rede de hackathons simultâneos ao redor do globo. Recebemos João Terra (Fundação Estudar) e Rodrigo Terron.',
      },
      en: {
        date: 'September 2025',
        location: 'IME-USP, São Paulo',
        description: 'In partnership with USPCodeLab and Hack Club, we organized Daydream São Paulo, part of a network of simultaneous hackathons around the globe. We hosted João Terra (Fundação Estudar) and Rodrigo Terron.',
      }
    },
    stats: {
      participants: '12+',
      projects: '3',
      duration: '10h'
    },
    photos: [
      daydream_event1,
      daydream_event2,
      daydream_event3,
      daydream_event4,
      daydream_event5
    ]
  },
  drx: {
    id: 'drx',
    status: 'upcoming',
    name: 'DRX by Hack SP',
    registrationUrl: 'https://hacksp.fillout.com/drx',
    bannerUrl: drx_banner,
    translations: {
      pt: {
        date: '28 de Fevereiro',
        location: 'A confirmar, São Paulo, SP',
        description: 'Em parceria com Dr. Consulta, Hack SP lança seu novo hackathon para adolescentes: DRX. Nosso próximo grande evento está chegando! Prepare-se para 12 horas de pura criação, aprendizado e pizzas.'
      },
      en: {
        date: 'February 28th',
        location: 'To be confirmed, São Paulo, SP',
        description: 'In partnership with Dr. Consulta, Hack SP launches its new hackathon for teenagers: DRX. Our next big event is coming soon! Get ready for 12 hours of pure creation, learning, and pizza.'
      }
    },
    photos: [],
  }
};
