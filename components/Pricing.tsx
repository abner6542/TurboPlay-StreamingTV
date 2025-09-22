
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const Pricing: React.FC = () => {
    const phoneNumber = '5511964537401';
    const message = encodeURIComponent('Olá, vim pelo site e gostaria de saber mais sobre os planos! 💰');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#f0942c] to-[#f7b733] rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-[#f0942c]/30">
                    <h2 className="text-3xl md:text-5xl font-black text-[#1a2c58] tracking-tight">Planos Acessíveis Para Todos</h2>
                    <p className="text-5xl md:text-7xl font-bold text-white my-4">
                        A partir de <span className="block">R$ 15,00</span>
                    </p>
                    <p className="text-lg text-[#1a2c58]/80 font-semibold">
                        A melhor qualidade com o melhor preço. Cancele quando quiser.
                    </p>
                    <div className="mt-8">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#1a2c58] font-bold py-3 px-8 rounded-full text-lg inline-flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            <WhatsAppIcon className="w-6 h-6" />
                            <span>Consultar Planos</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
