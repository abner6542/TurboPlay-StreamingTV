
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const Header: React.FC = () => {
  const phoneNumber = '5511964537401';
  const message = encodeURIComponent('Olá, vim pelo site e desejo um teste grátis! 👋🎬 Quero saber mais!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <header className="sticky top-0 z-50 bg-[#1a2c58]/80 backdrop-blur-sm shadow-lg shadow-black/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
            <svg className="w-10 h-10 text-[#f0942c]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6.48V17.52C4 18.33 4.67 19 5.48 19H18.52C19.33 19 20 18.33 20 17.52V6.48C20 5.67 19.33 5 18.52 5H5.48C4.67 5 4 5.67 4 6.48ZM10.5 15.5V8.5L15.5 12L10.5 15.5Z" />
                <path d="M2 9H4V15H2V9Z" /><path d="M20 9H22V15H20V9Z" />
            </svg>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Turbo<span className="text-[#f0942c]">Play</span>
            </h1>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
        >
          <WhatsAppIcon className="w-6 h-6" />
          <span>Contato</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
