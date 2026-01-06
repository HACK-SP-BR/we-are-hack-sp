import event1 from '@/assets/events/daydream-sp/event1.jpeg';
import event2 from '@/assets/events/daydream-sp/event2.jpeg';
import event3 from '@/assets/events/daydream-sp/event3.jpeg';
import event4 from '@/assets/events/daydream-sp/event4.jpeg';
import event5 from '@/assets/events/daydream-sp/event5.jpeg';

export interface EventInfo {
  id: string;
  name: string;
  date: string;
  location: string;
  p1: string;
  videoUrl: string;
  websiteUrl: string;
  stats: {
    participants: string;
    projects: string;
    duration: string;
  };
  photos: string[];
}

export const events: Record<string, EventInfo> = {
  daydream: {
    id: 'daydream-sp',
    name: 'Daydream São Paulo',
    date: 'Setembro de 2025',
    location: 'IME-USP, São Paulo',
    p1: 'Em parceria com USPCodeLab e Hack Club, fizemos o Daydream São Paulo, parte de uma rede de hackathons simultâneos ao redor do globo. Recebemos João Terra (Fundação Estudar) e Rodrigo Terron.',
    videoUrl: 'https://youtu.be/cVLTBsyJduM',
    websiteUrl: 'https://daydream.hackclub.com/sao-paulo',
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
  }
};
