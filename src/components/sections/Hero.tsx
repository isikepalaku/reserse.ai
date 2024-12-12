import React from 'react';
import { ArrowRight } from 'lucide-react';
import NetworkAnimation from '../animations/NetworkAnimation';
import MapBackground from '../animations/MapBackground';
import { theme } from '../../styles/theme';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Carbon Pattern Background */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: '#000000',
          backgroundImage: `
            radial-gradient(#333333 1px, transparent 1px),
            radial-gradient(#333333 1px, black 1px)
          `,
          backgroundPosition: '0 0, 12px 12px',
          backgroundSize: '24px 24px',
          opacity: 0.7,
          pointerEvents: 'none',
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)`,
          backdropFilter: 'blur(1px)',
        }}
      />

      {/* Animation Layers */}
      <div className="absolute inset-0" style={{ opacity: 0.8 }}>
        <MapBackground />
      </div>
      <div className="absolute inset-0" style={{ opacity: 0.9 }}>
        <NetworkAnimation />
      </div>

      {/* Content Layer */}
      <div 
        className="relative min-h-screen flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto text-center pt-16 sm:pt-20 px-4">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <img 
              src="/src/static/img/maskable-icon.png" 
              alt="Reverse AI Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              style={{ filter: 'drop-shadow(0 0 10px rgba(196, 30, 58, 0.5))' }}
            />
          </div>
          <div 
            className="font-mono uppercase mb-3 sm:mb-4 tracking-widest text-xs sm:text-sm text-glow-red" 
            style={{ color: '#C41E3A' }}
          >
            Developed by // Ibrahim Sandre
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 tracking-tech uppercase" style={{ letterSpacing: '0.05em' }}>
            <span style={{ color: '#FFFFFF' }}>RESERSE</span>
            <span style={{ color: '#C41E3A', fontSize: '0.7em' }}> // AI</span>
            <div className="block mt-3 sm:mt-4 text-lg sm:text-2xl md:text-3xl font-mono tracking-wider" style={{ color: '#FFFFFF' }}>
              ASISTEN PENYIDIK POLRI
            </div>
          </h1>
          <p 
            className="text-base sm:text-xl mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto font-light leading-relaxed px-4 sm:px-0" 
            style={{ 
              color: theme.colors.text.secondary,
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
            }}
          >
            Alat bantu penyidik berbasis Ai,
            Analisa kasus hukum berbasis Artificial Intelligence dengan teknologi RAG (Retrieval Augmented Generation).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a 
              href="https://chat.reserse.id"
              className="w-full sm:w-auto no-underline"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://chat.reserse.id';
              }}
            >
              <button 
                className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold flex items-center justify-center transition-all transform hover:scale-105"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                Analisa Kasus <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </a>
            <button 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all border-2"
              style={{ 
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(4px)',
              }}
            >
              Lihat Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;