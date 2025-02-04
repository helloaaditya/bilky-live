import React from 'react';
import { Heart, Users, Globe, Video, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      number: "1M+",
      label: "Singles Connected",
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />,
    },
    {
      number: "150K+",
      label: "Daily Live Dates",
      icon: <Video className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />,
    },
    {
      number: "50+",
      label: "Countries with Love",
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />,
    },
    {
      number: "4.9",
      label: "Love Rating",
      icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />,
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute opacity-5 text-pink-500
              ${i % 2 === 0 ? 'animate-float-slow' : 'animate-float-slower'}
              ${i % 3 === 0 ? 'w-8 h-8 md:w-12 md:h-12' : 'w-6 h-6 md:w-8 md:h-8'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
          Finding Love in Numbers
        </h2>

        <div className="mx-4 md:mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:scale-105"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl blur-lg -z-10"
              />
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm bg-white/90 hover:bg-white/95 transition-all duration-300">
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-center text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-30px) rotate(-8deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default StatsSection;