"use client";
import React, { useState, useEffect } from 'react';
import { Play, Heart, Users, Sparkles, Music, Gamepad, ChevronDown, ArrowRight, ArrowRightCircleIcon, HeartIcon, ChartAreaIcon, PinIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GoGoal } from 'react-icons/go';
import { BsAndroid, BsHeartFill } from 'react-icons/bs';
import { MdNearMe } from 'react-icons/md';
import StatsSection from '../sections/StatsSection';
import Footer from '../sections/footer';
import BilkyPlatform from '../sections/bilkyPlatform';

const ModernHero = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    return (
      <div className="relative">
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700">
          <div className="container mx-auto px-4 pt-20 md:pt-32 pb-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              {/* Left Content - Stacks on mobile */}
              <div className="w-full md:w-1/2 text-white z-10 text-center md:text-left px-4 md:ml-10">
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
                    Start Your
                    <span className="block bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                      Journey Today
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Join millions in the ultimate social experience.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8 md:mb-12">
                    <Button size="lg" className="bg-white text-green-400 hover:bg-white/90 rounded-full w-full sm:w-auto">
                      <div className="flex items-center justify-center">
                        <Play className="w-6 h-6 mr-2" />
                        <div className="flex flex-col items-start">
                          <span className="text-xs">GET IT ON</span>
                          <span className="text-sm">Google Play</span>
                        </div>
                      </div>
                    </Button>
                    <Button size="lg" variant="outline" className="text-purple-500 border-white bg-white hover:bg-white/90 rounded-full w-full sm:w-auto">
                    <div className="flex items-center justify-center">
                      <BsAndroid className="w-5 h-5 mr-2" />
                      <div className="flex flex-col items-start">
                        <span className="text-xs">Download</span>
                        <span className="text-sm">Android APK</span>
                      </div>
                    </div>
                    </Button>
                  </div>
                  
                  {/* User Stats - Responsive Grid */}
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-8">
                    <div className="flex -space-x-4 overflow-hidden">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center">
                          <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      ))}
                    </div>
                    <div className="text-center md:text-left">
                      <div className="font-bold text-xl md:text-2xl">1M+</div>
                      <div className="text-gray-300 text-sm md:text-base">Active Users</div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Right Content - Phone Mockup */}
              <div className="w-full md:w-1/2 relative z-10 mt-8 md:mt-0">
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="relative mx-auto max-w-sm md:max-w-none">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/bilky-80c73.firebasestorage.app/o/Untitled%20design(1).gif?alt=media&token=549ae4dc-b3fb-493b-a5f5-3f78dc5b9016"
                      alt="App Interface"
                      className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Cards - Hidden on smallest screens */}
                    <div className="hidden sm:block absolute -left-4 md:-left-10 top-1/4 bg-white p-3 md:p-4 rounded-xl shadow-lg">
                      <BsHeartFill className="text-pink-500 w-5 h-5 md:w-6 md:h-6 mb-2" />
                      <div className="text-xs md:text-sm text-pink-500">Live Streaming</div>
                    </div>
                    <div className="hidden sm:block absolute -right-4 top-1/2 bg-white p-3 md:p-4 rounded-xl shadow-lg">
                      <Music className="text-purple-500 w-5 h-5 md:w-6 md:h-6 mb-2" />
                      <div className="text-xs md:text-sm text-purple-500">Audio Rooms</div>
                    </div>
                    <div className="hidden sm:block absolute -left-4 md:-left-16 bottom-1/4 bg-white p-3 md:p-4 rounded-xl shadow-lg">
                      <Gamepad className="text-indigo-500 w-5 h-5 md:w-6 md:h-6 mb-2" />
                      <div className="text-xs md:text-sm text-indigo-500">Gaming</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Features Grid - Responsive */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl text-pink-500 font-bold mb-4">Why Choose Us?</h2>
                <p className="text-lg md:text-xl text-purple-500">Experience the next generation</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mx-4 md:mx-10">
                {[
                  {
                    icon: Sparkles,
                    title: "HD Streaming",
                    description: "Crystal clear video quality",
                    color: "pink"
                  },
                  {
                    icon: Users,
                    title: "Global Community",
                    description: "Connect with millions worldwide",
                    color: "purple"
                  },
                  {
                    icon: Heart,
                    title: "Interactive Features",
                    description: "Engage with your audience",
                    color: "pink"
                  },
                  {
                    icon: MdNearMe,
                    title: "Near Me",
                    description: "Discover local connections",
                    color: "pink"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-900 to-pink-400"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-sm md:text-base text-white/80">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
            <BilkyPlatform />
            <StatsSection />
            <Footer />

            {/* mobile responsive */}
            

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 3s ease-in-out infinite;
                    animation-delay: 1s;
                }
                .animate-float-more-delayed {
                    animation: float 3s ease-in-out infinite;
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    );
};

export default ModernHero;