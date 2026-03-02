import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { HelpCircle, ChevronDown, Mail } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-transition max-w-4xl mx-auto py-20 px-4 md:px-0 space-y-20">
      <header className="text-center space-y-6">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-3xl mb-4">
          <HelpCircle size={48} className="text-primary animate-pulse-slow" />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          FAQ
        </h1>
        <p className="text-2xl opacity-60 max-w-2xl mx-auto leading-relaxed">
          {language === 'pt' 
            ? 'Tudo o que você precisa saber sobre os hackathons do Hack SP.' 
            : 'Everything you need to know about Hack SP hackathons.'}
        </p>
      </header>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`group rounded-3xl border border-border/50 transition-all duration-300 overflow-hidden ${
              openIndex === i 
                ? 'bg-foreground/[0.04] border-primary/30 shadow-lg shadow-primary/5' 
                : 'bg-foreground/[0.02] hover:bg-foreground/[0.03] hover:border-primary/20'
            }`}
          >
            <button 
              onClick={() => toggleFaq(i)}
              className="w-full text-left p-8 flex items-center justify-between gap-4"
            >
              <h3 className={`text-xl md:text-2xl font-bold transition-colors ${openIndex === i ? 'text-primary' : 'opacity-90'}`}>
                {faq.q}
              </h3>
              <div className={`p-2 rounded-full bg-primary/5 transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-primary text-white' : 'group-hover:bg-primary/10 text-primary'}`}>
                <ChevronDown size={24} />
              </div>
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIndex === i 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className="px-8 pb-8 pt-0">
                <p className="text-lg md:text-xl opacity-70 leading-relaxed border-t border-border/50 pt-6">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-primary/5 rounded-[3rem] p-12 md:p-16 border border-primary/10 text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            {language === 'pt' ? 'Ainda tem dúvidas?' : 'Still have questions?'}
          </h2>
          <p className="text-xl opacity-70 max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Se você não encontrou o que procurava, sinta-se à vontade para entrar em contato com o nosso time.' 
              : "If you didn't find what you were looking for, feel free to reach out to our team."}
          </p>
          <a 
            href="mailto:contato@hacksp.com.br"
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-primary/20"
          >
            <Mail size={24} />
            {language === 'pt' ? 'Mandar um e-mail' : 'Send an email'}
          </a>
          <p className="text-primary font-bold">contato@hacksp.com.br</p>
        </div>
      </section>
    </div>
  );
};