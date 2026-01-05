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
  quote: string;
}

export const events: Record<string, EventInfo> = {
  daydream: {
    id: 'daydream-sp',
    name: 'Daydream São Paulo',
    date: '24 de Agosto de 2024',
    location: 'IME-USP, São Paulo',
    p1: 'O Hack SP já organizou o Daydream São Paulo, no Instituto de Matemática, Estatística e Ciência da Computação da Universidade de São Paulo (IME-USP).',
    videoUrl: '"https://youtu.be/cVLTBsyJduM"',
    websiteUrl: 'https://daydream.hackclub.com/sao-paulo',
    stats: {
      participants: '12+',
      projects: '3',
      duration: '10h'
    },
    quote: '"O Daydream foi onde muitos de nós descobrimos que hackear é mais do que código, é comunidade."'
  }
};
