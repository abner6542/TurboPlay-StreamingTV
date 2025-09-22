
import React, { useState } from 'react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Em quais aparelhos posso assistir?",
    answer: "Você pode assistir no seu celular (Android e iOS), Smart TV, TV Box, Notebook, Desktop, Tablet e muito mais. Praticamente qualquer dispositivo com acesso à internet é compatível!"
  },
  {
    question: "Quais são os principais aplicativos compatíveis?",
    answer: "Nosso serviço é compatível com os melhores e mais populares aplicativos do mercado, incluindo Duplecast, IBO Player, Smarters Player, XCIPTV, XCloud, Bob Player, entre muitos outros. A escolha é sua!"
  },
  {
    question: "Preciso de uma antena para usar o serviço?",
    answer: "Não! Nosso serviço é 100% online (IPTV). Tudo o que você precisa é de uma conexão de internet estável com velocidade de pelo menos 10mbps para uma experiência fluida."
  },
  {
    question: "Posso testar o serviço antes de assinar?",
    answer: "Com certeza! Oferecemos um teste grátis para que você possa comprovar a qualidade e estabilidade do nosso serviço. Basta clicar no botão 'Peça seu teste grátis' no topo da página."
  },
  {
    question: "Como funciona o pagamento dos planos?",
    answer: "Trabalhamos com pagamentos via PIX, tornando o processo rápido, seguro e descomplicado. Você renova seu plano de forma pré-paga, sem contratos ou burocracia."
  }
];

const FaqAccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-blue-400/20">
      <button
        onClick={onClick}
        className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none"
      >
        <span className="text-lg font-semibold text-white">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-[#f0942c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <p className="px-6 pb-5 text-gray-300">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Dúvidas Frequentes</h2>
          <p className="text-gray-400 mt-2">Encontre respostas para as perguntas mais comuns.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-[#2a4175]/60 rounded-2xl shadow-lg">
          {faqData.map((item, index) => (
            <FaqAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
