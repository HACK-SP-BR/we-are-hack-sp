import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { language } = useLanguage();
  
  const faqs = language === 'pt' ? [
    { q: "Preciso saber programar?", a: "Não! Hackathons são ótimos lugares para aprender. Teremos mentores para ajudar você a começar." },
    { q: "Tem idade mínima?", a: "Nossos eventos são focados em estudantes do Ensino Médio (aprox. 14-18 anos)." },
    { q: "Quanto custa?", a: "Nada! Nossos hackathons são gratuitos para os participantes." },
    { q: "O que levar?", a: "Geralmente um notebook, carregador e muita vontade de criar. Detalhes específicos são enviados por e-mail antes de cada evento." },
    { q: "Como formar um time?", a: "Você pode vir com amigos ou formar um time na hora. No início de cada hackathon temos uma sessão de formação de times." },
    { q: "É seguro?", a: "Sim, todos os eventos têm supervisão de adultos e seguem um Código de Conduta rigoroso." }
  ] : [
    { q: "Do I need to know how to code?", a: "No! Hackathons are great places to learn. We'll have mentors to help you get started." },
    { q: "Is there a minimum age?", a: "Our events are focused on high school students (approx. 14-18 years old)." },
    { q: "How much does it cost?", a: "Nothing! Our hackathons are free for participants." },
    { q: "What should I bring?", a: "Usually a laptop, charger, and a lot of will to create. Specific details are sent by email before each event." },
    { q: "How do I form a team?", a: "You can come with friends or form a team on the spot. At the start of each hackathon, we have a team formation session." },
    { q: "Is it safe?", a: "Yes, all events have adult supervision and follow a strict Code of Conduct." }
  ];

  return (
    <div className="page-transition max-w-4xl mx-auto py-12 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-6xl font-bold flex items-center justify-center gap-4">
          <HelpCircle size={56} className="text-primary" />
          FAQ
        </h1>
        <p className="text-2xl opacity-70 italic">
          {language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
        </p>
      </header>

      <div className="grid gap-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-foreground/[0.03] p-8 rounded-3xl border border-border/50 hover:border-primary/20 transition-colors">
            <h3 className="text-2xl font-bold mb-3 text-primary">{faq.q}</h3>
            <p className="text-lg opacity-80 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};