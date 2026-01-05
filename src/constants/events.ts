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
  photos: string[];
}

export const events: Record<string, EventInfo> = {
  daydream: {
    id: 'daydream-sp',
    name: 'Daydream São Paulo',
    date: 'Setembro de 2025',
    location: 'IME-USP, São Paulo',
    p1: 'Em parceria com USPCodeLab e Hack Club, fizemos o Daydream São Paulo, parte de uma rede de hackathons simultâneos ao redor do globo. Recebemos João Terra (Fundação Estudar) e Rodrigo Terron.',
    videoUrl: '"https://youtu.be/cVLTBsyJduM"',
    websiteUrl: 'https://daydream.hackclub.com/sao-paulo',
    stats: {
      participants: '12+',
      projects: '3',
      duration: '10h'
    },
    photos: [
      'https://cloud-3p0x62k84-hack-club-bot.vercel.app/0img_5159.jpg',
      'https://cloud-3p0x62k84-hack-club-bot.vercel.app/1img_5146.jpg',
      'https://cloud-3p0x62k84-hack-club-bot.vercel.app/2img_5157.jpg',
      'https://cloud-3p0x62k84-hack-club-bot.vercel.app/3img_5148.jpg',
      'https://cloud-3p0x62k84-hack-club-bot.vercel.app/4img_5131.jpg',
      'https://cloud-3p0x62k84-hack-club-bot.vercel.app/5img_5119.jpg'
    ]
  }
};
