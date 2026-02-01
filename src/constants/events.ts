import event1 from '../assets/events/daydream-sp/event1.jpeg';
import event2 from '../assets/events/daydream-sp/event2.jpeg';
import event3 from '../assets/events/daydream-sp/event3.jpeg';
import event4 from '../assets/events/daydream-sp/event4.jpeg';
import event5 from '../assets/events/daydream-sp/event5.jpeg';

export interface EventInfo {
  id: string;
  status: 'upcoming' | 'past';
  name: string;
  videoUrl?: string;
  websiteUrl?: string;
  registrationUrl?: string;
  bannerUrl?: string;
  translations: {
    pt: {
      date: string;
      location: string;
      description: string;
      extraInfo?: string;
    };
    en: {
      date: string;
      location: string;
      description: string;
      extraInfo?: string;
    };
  };
  stats?: {
    participants: string;
    projects: string;
    duration: string;
  };
  photos: string[];
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
      event1,
      event2,
      event3,
      event4,
      event5
    ]
  },
  proximo: {
    id: 'proximo-hackathon',
    status: 'upcoming',
    name: 'Hack SP 2026',
    registrationUrl: 'https://exemplo.com/inscricao',
    bannerUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
    translations: {
      pt: {
        date: 'Em breve em 2026',
        location: 'São Paulo, SP',
        description: 'Nosso próximo grande evento está chegando! Prepare-se para 24 horas de pura criação, aprendizado e pizzas.',
        extraInfo: 'As inscrições abrirão em breve. Fique atento às nossas redes sociais!'
      },
      en: {
        date: 'Coming soon in 2026',
        location: 'São Paulo, SP',
        description: 'Our next big event is coming! Get ready for 24 hours of pure creation, learning, and pizzas.',
        extraInfo: 'Registration will open soon. Stay tuned to our social media!'
      }
    },
    photos: []
  }
};
