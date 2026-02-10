import React from 'react';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onOpen }) => {
  return (
    <div className="cursor-pointer" onClick={onOpen} style={{ perspective: '1000px' }}>
      <div 
        className={`relative w-64 h-40 bg-white rounded-lg shadow-2xl transition-all duration-700 transform ${
          isOpen ? 'scale-95 opacity-50' : 'hover:scale-105'
        }`}
        style={{
          boxShadow: '0 20px 60px rgba(255, 71, 129, 0.3)',
        }}
      >
        {/* Envelope body */}
        <div className="absolute inset-0 bg-white rounded-lg overflow-hidden border-2 border-pink-200">
          {/* Triangle pattern on envelope */}
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 256 160" className="w-full h-full">
              <path d="M0 0 L128 80 L256 0" stroke="currentColor" fill="none" strokeWidth="2" />
              <path d="M0 160 L128 80" stroke="currentColor" fill="none" strokeWidth="2" />
              <path d="M256 160 L128 80" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
          </div>

          {/* Back decorative flap (stays behind) */}
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-pink-400 to-pink-300 z-0"
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'top',
              transform: 'translateZ(-1px)',
            }}
          >
            <div className="flex items-center justify-center h-full text-white font-bold text-lg">
              💌
            </div>
          </div>

          {/* Front flap (rotates to open) */}
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-pink-300 to-pink-200 z-20"
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'top',
              transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              backfaceVisibility: 'hidden',
            }}
          />

          {/* Message inside (shown when envelope opens) */}
          {isOpen && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white to-pink-50 p-6 animate-fade-in rounded-lg">
              <div className="text-center space-y-3">
                <p className="text-pink-600 font-bold text-xl">Para ti 💝</p>
                <p className="text-gray-700 text-sm italic">
                  Gracias por ser mi persona favorita
                </p>
                <p className="text-pink-500 text-2xl">✨</p>
              </div>
            </div>
          )}

          {/* Envelope bottom message */}
          {!isOpen && (
            <div className="absolute inset-0 flex items-center justify-center text-pink-400 font-semibold text-sm hover:text-pink-500 transition-colors">
              Haz clic para abrir 💌
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-in;
          }
        `}
      </style>
    </div>
  );
};

export default Envelope;
