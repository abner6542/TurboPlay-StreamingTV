
import React from 'react';
import { FilmIcon } from './icons/FilmIcon';
import { TvIcon } from './icons/TvIcon';
import { SignalIcon } from './icons/SignalIcon';
import { RocketIcon } from './icons/RocketIcon';

const features = [
  {
    icon: <FilmIcon />,
    title: "+25.000 Filmes",
    description: "Dos clássicos atemporais aos últimos lançamentos de Hollywood, nossa biblioteca de filmes é imbatível."
  },
  {
    icon: <TvIcon />,
    title: "+30.000 Séries",
    description: "Maratone as séries mais aclamadas do mundo. Novidades adicionadas semanalmente para você não perder nada."
  },
  {
    icon: <SignalIcon />,
    title: "Canais ao Vivo",
    description: "Assista a esportes, notícias, e entretenimento em tempo real com nossa grade de canais ao vivo."
  },
  {
    icon: <RocketIcon />,
    title: "Servidor Nº1 do Brasil",
    description: "Experimente a estabilidade e velocidade que só o melhor servidor do Brasil pode oferecer. Streaming sem travamentos."
  }
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-[#2a4175]/60 p-6 rounded-2xl border border-blue-400/20 shadow-lg hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-[#f0942c] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-[#152347]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Por que escolher o TurboPlay?</h2>
          <p className="text-gray-400 mt-2">Tudo o que você precisa para um entretenimento sem limites.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
