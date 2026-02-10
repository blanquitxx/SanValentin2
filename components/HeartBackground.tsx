import React, { useState, useEffect } from 'react';
import { Heart } from '../types';

const HeartBackground: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initialHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      size: Math.random() > 0.5 ? '20px' : '30px',
      duration: Math.random() * 3 + 4 + 's',
      delay: Math.random() * 0.5 + 's',
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #ff1744 0%, #ff4081 25%, #f50057 50%, #c2185b 75%, #880e4f 100%)',
          filter: 'blur(80px)',
          opacity: 0.3,
        }}
      />
      
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float text-4xl opacity-70 hover:opacity-100 transition-opacity"
          style={{
            left: heart.left,
            bottom: '-50px',
            fontSize: heart.size,
            animation: `float ${heart.duration} linear ${heart.delay} infinite`,
            filter: 'drop-shadow(0 0 10px rgba(255, 71, 129, 0.6))',
          }}
        >
          ❤️
        </div>
      ))}

      <style>
        {`
          @keyframes float {
            to {
              transform: translateY(-100vh) rotate(360deg);
            }
          }
          .animate-float {
            animation: float 6s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default HeartBackground;
