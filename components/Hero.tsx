
import React from 'react';

const Hero: React.FC = () => {
  const phoneNumber = '5511964537401';
  const message = encodeURIComponent('Olá, vim pelo site e desejo um teste grátis! 👋🎬 Quero saber mais!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="container mx-auto px-6 py-24 sm:py-32 text-center relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#f0942c]/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-[#f7b733]/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
          A Melhor Experiência de Streaming do Brasil
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          Canais ao vivo, mais de 25.000 filmes e 30.000 séries. Tudo o que você ama, em um só lugar, com o melhor servidor do país.
        </p>
        <div className="mt-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#f0942c] to-[#f7b733] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-[#f0942c]/50 animate-pulse"
          >
            PEÇA SEU TESTE GRÁTIS AGORA 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
