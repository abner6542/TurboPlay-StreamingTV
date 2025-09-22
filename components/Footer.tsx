
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#152347] border-t border-blue-400/20 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center items-center mb-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Turbo<span className="text-[#f0942c]">Play</span>
            </h3>
        </div>
        <p className="mb-4">Siga-nos em nossas redes sociais!</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com/turboplay_s/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-8 h-8" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Turbo Play. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
