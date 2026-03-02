import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TypingTitle } from '../components/TypingTitle';
import { ArrowRight, Code2, Users, Rocket, Zap, BookOpen, MessageSquare, Presentation, Star, Newspaper, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '../constants/events';
import { news } from '../constants/news';
import {configUrl} from "../config/config.ts";

export const Home: React.FC = () => {
  const { t, language } = useLanguage();

  const pastEvents = Object.values(events)
    .filter(e => e.status === 'past')
    .slice(0, 2);

  const valueIcons = [<Code2 size={32} />, <Users size={32} />, <MessageSquare size={32} />, <Rocket size={32} />];
  const stepIcons = [<Users size={32} />, <BookOpen size={32} />, <Zap size={32} />, <Presentation size={32} />];

  return (
    <div className="page-transition flex flex-col items-center">
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center mb-20 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
        <TypingTitle 
          part1={t('home.title.part1')} 
          part2={t('home.title.part2')} 
        />
        <p className="text-xl md:text-3xl opacity-60 max-w-3xl mx-auto leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 fill-mode-both">
          {t('home.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
          <Link 
            to="/hackathons" 
            className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20"
          >
            {t('home.cta.primary')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/support" 
            className="flex items-center gap-2 bg-foreground/5 backdrop-blur-sm border border-border px-8 py-4 rounded-full font-bold text-lg hover:bg-foreground/10 transition-all"
          >
            {t('home.cta.secondary')}
          </Link>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto space-y-40 py-16 px-4">
        {/* Nossos Princípios */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">{t('home.values.title')}</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="bg-background/60 dark:bg-background/40 backdrop-blur-md p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {valueIcons[index]}
                </div>
                <h3 className="text-2xl font-bold mb-4">{t(`home.valueCards.${index}.title` as any)}</h3>
                <p className="opacity-70 leading-relaxed">{t(`home.valueCards.${index}.desc` as any)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Como funciona */}
        <div className="bg-foreground/[0.02] rounded-[3rem] p-8 md:p-16 border border-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] -mr-48 -mt-48 rounded-full" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                {t('home.how.title')}
              </h2>
              <p className="text-xl opacity-70 leading-relaxed max-w-xl">
                {language === 'pt' 
                  ? 'Transformamos ideias em realidade em um único dia. Proporcionamos todo o suporte necessário para que você foque apenas em criar.'
                  : 'We turn ideas into reality in a single day. We provide all the support needed so you can focus only on creating.'}
              </p>
              <div className="flex pt-4">
                <Link to="/faq" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  {language === 'pt' ? 'Tire suas dúvidas' : 'Check our FAQ'} <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="bg-background/80 dark:bg-background/60 p-6 rounded-2xl border border-border/50 flex items-start gap-4 shadow-sm">
                  <div className="text-primary mt-1">
                    {stepIcons[index]}
                  </div>
                  <span className="text-lg font-medium">{t(`home.how.item.${index}` as any)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Últimas Notícias */}
        {news.length > 0 && (
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
                <Newspaper size={18} />
                {t('home.news.title')}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold">
                {language === 'pt' ? 'O que está rolando' : "What's happening"}
              </h2>
            </div>
          </div>



          <div className="grid md:grid-cols-2 gap-8">
            {news.map((item) => {
              const content = item.translations[language as 'pt' | 'en'] || item.translations.pt;
              const isExternal = item.link?.startsWith('http');
              const CardContent = (
                <>
                  <div className="absolute inset-0">
                    <img 
                      src={item.image} 
                      alt={content.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {content.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-10 text-white space-y-4">
                    <h3 className="text-3xl font-bold">{content.title}</h3>
                    <p className="opacity-80 line-clamp-2 max-w-md">
                      {content.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                      {t('home.news.cta')}
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </>
              )

              return isExternal ? (
                <a 
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl transition-all hover:scale-[1.02] duration-500"
                >
                  {CardContent}
                </a>
              ) : (
                <Link 
                  key={item.id}
                  to={item.link || '#'}
                  className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl transition-all hover:scale-[1.02] duration-500"
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>
        )}

        {/* Histórico de Eventos */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
                <Star size={18} />
                {language === 'pt' ? 'Histórico' : 'History'}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold">{t('home.past.title')}</h2>
            </div>
            <Link to="/hackathons" className="group flex items-center gap-2 text-xl font-bold opacity-70 hover:opacity-100 transition-opacity">
              {language === 'pt' ? 'Ver histórico completo' : 'View full history'}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => {
              const content = event.translations[language as 'pt' | 'en'] || event.translations.pt;
              return (
                <Link 
                  key={event.id}
                  to={`/${event.id}`}
                  className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl transition-all hover:scale-[1.02] duration-500"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={event.bannerUrl || (event.photos && event.photos[0])} 
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-10 text-white space-y-4">
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Star size={16} fill="currentColor" />
                      <span className="uppercase tracking-widest text-sm">DESTAQUE</span>
                    </div>
                    <h3 className="text-3xl font-bold">{event.name}</h3>
                    <p className="opacity-80 line-clamp-2 max-w-md">
                      {content.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Discord Section */}
        <div className="relative overflow-hidden rounded-[3rem] bg-[#5865F2] p-8 md:p-16 text-white border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] -mr-48 -mt-48 rounded-full" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                <MessageCircle size={20} />
                Community
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                {t('home.discord.title')}
              </h2>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                {t('home.discord.p1')}
              </p>
              <a 
                href={configUrl.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-[#5865F2] px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
              >
                {t('home.discord.cta')}
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="hidden md:flex justify-center items-center">
               <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center animate-pulse-slow">
                 <MessageCircle size={120} className="text-white" />
               </div>
            </div>
          </div>
        </div>

        {/* Quem somos? */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-bold border-l-8 border-primary pl-8">
              {t('home.who.title')}
            </h2>
            <div className="space-y-8 text-2xl opacity-90 leading-relaxed">
              <p className="font-medium text-foreground">{t('home.who.p1')}</p>
              <p>{t('home.who.p2')}</p>
              <div className="pt-4 flex justify-center md:justify-start">
                <Link 
                  to="/about" 
                  className="group inline-flex items-center gap-3 bg-foreground/5 backdrop-blur-sm border border-border px-8 py-4 rounded-full font-bold text-xl hover:bg-foreground/10 transition-all"
                >
                  {t('home.transparency.more')} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 rounded-[3rem] p-8 md:p-12 border border-primary/20 space-y-8">
             <h3 className="text-3xl font-bold">{t('home.transparency.title')}</h3>
             <p className="text-xl opacity-80 leading-relaxed">
               {t('home.transparency.p1')}
             </p>
             <a 
               href="https://hcb.hackclub.com/hack-sp" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
             >
               {t('home.transparency.linkLabel')} <ArrowRight size={20} />
             </a>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center py-20 space-y-12 border-t border-border/50">
          <h2 className="text-5xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight">
            {language === 'pt' 
              ? 'Pronto para começar sua jornada?' 
              : 'Ready to start your journey?'}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/hackathons" 
              className="group flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-bold text-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/20"
            >
              {language === 'pt' ? 'Inscrever-se agora' : 'Register Now'}
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
