
import React, { useState, useEffect, useCallback } from 'react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "Absolutamente o melhor serviço de IPTV que já usei! A qualidade da imagem é incrível e nunca trava. Recomendo 100%!",
    name: "João Silva",
    location: "São Paulo, SP",
    avatar: "https://picsum.photos/seed/joao/100/100"
  },
  {
    quote: "A variedade de filmes e séries é gigantesca. Eu e minha família temos entretenimento para o ano todo. O suporte também é super atencioso.",
    name: "Maria Oliveira",
    location: "Rio de Janeiro, RJ",
    avatar: "https://picsum.photos/seed/maria/100/100"
  },
  {
    quote: "Finalmente consigo assistir aos jogos do meu time em alta definição e sem atrasos. O TurboPlay mudou minha forma de ver TV!",
    name: "Carlos Pereira",
    location: "Belo Horizonte, MG",
    avatar: "https://picsum.photos/seed/carlos/100/100"
  },
  {
    quote: "Cancelei todos os meus outros streamings. O TurboPlay tem tudo em um só lugar por um preço justo. Simplesmente perfeito!",
    name: "Ana Costa",
    location: "Salvador, BA",
    avatar: "https://picsum.photos/seed/ana/100/100"
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="py-20 bg-[#152347]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">O que nossos clientes dizem</h2>
          <p className="text-gray-400 mt-2">A satisfação de quem confia no nosso serviço.</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden relative h-80">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="bg-[#2a4175]/60 p-8 rounded-2xl h-full flex flex-col justify-center items-center text-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-4 border-[#f0942c]" />
                  <p className="text-lg italic text-gray-200">"{testimonial.quote}"</p>
                  <div className="mt-4">
                    <p className="font-bold text-white text-xl">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-[#f0942c] text-white p-3 rounded-full hover:bg-[#f7b733] transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-[#f0942c] text-white p-3 rounded-full hover:bg-[#f7b733] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

