"use client";
import React from 'react';
import { Heart, Users, Globe, Video, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { 
      number: "1M+", 
      label: "Singles Connected", 
      icon: <Users className="w-8 h-8 text-pink-500" />,
      gradient: "from-pink-500 to-purple-500"
    },
    { 
      number: "150K+", 
      label: "Daily Live Dates", 
      icon: <Video className="w-8 h-8 text-pink-500" />,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      number: "50+", 
      label: "Countries with Love", 
      icon: <Globe className="w-8 h-8 text-pink-500" />,
      gradient: "from-pink-500 to-purple-500"
    },
    { 
      number: "4.9", 
      label: "Love Rating", 
      icon: <Star className="w-8 h-8 text-pink-500" />,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute opacity-5 text-pink-500 
              ${Math.random() > 0.5 ? 'animate-float-slow' : 'animate-float-slower'}
              ${Math.random() > 0.5 ? 'w-12 h-12' : 'w-8 h-8'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
          Finding Love in Numbers
        </h2>

        <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative transform transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-lg -z-10"
                   style={{
                     background: `linear-gradient(to right, rgb(236, 72, 153), rgb(147, 51, 234))`,
                   }} />
              <div className="bg-white rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-white/90 hover:bg-white/95 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

// Add these to your global CSS
const style = `
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
`;