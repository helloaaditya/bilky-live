"use client";
import React, { useState, useEffect } from 'react';
import { Heart, Users, Sparkles, Music, Gamepad, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { BsHeartFill } from 'react-icons/bs';
import { MdNearMe } from 'react-icons/md';
import StatsSection from '../sections/StatsSection';
import Footer from '../sections/footer';
import BilkyPlatform from '../sections/bilkyPlatform';
import { Shield, HeadphonesIcon, Lock, Flag, Eye, SlidersHorizontal, Zap, Crown } from 'lucide-react';

const ModernHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-700">
        <div className="container mx-auto px-4 pt-20 md:pt-32 pb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content - Stacks on mobile */}
            <div className="w-full md:w-1/2 text-white z-10 text-center md:text-left px-4 md:ml-10">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6">
                  <span className="text-pink-300 font-medium flex items-center gap-2">
                    <Heart className="w-4 h-4" /> Premium Dating Experience
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
                  Start Your
                  <span className="block bg-gradient-to-r from-pink-500 to-white text-transparent bg-clip-text">
                    Journey Today
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  Join millions in the ultimate social experience.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8 md:mb-12">
                  {/* Download Buttons - Better Aligned in 2 Per Row */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-2 md:mb-4">
                    <div className="relative group w-full transition-all duration-300 transform hover:scale-105 flex justify-center">
                      <img src="https://media.chingari.io/apipublic/chingari-web-assets/icons/app-store.svg" alt="App Store" className="h-14 w-auto" />
                    </div>

                    <div className="relative group w-full transition-all duration-300 transform hover:scale-105 flex justify-center">
                      <img src="https://media.chingari.io/apipublic/chingari-web-assets/icons/play-store.svg" alt="Google Play" className="h-14 w-auto" />
                    </div>

                    <div className="relative group w-full transition-all duration-300 transform hover:scale-105 flex justify-center">
                      <img src="https://media.chingari.io/apipublic/chingari-web-assets/icons/apk.svg" alt="Download APK" className="h-14 w-auto" />
                    </div>

                    <div className="relative group w-full transition-all duration-300 transform hover:scale-105 flex justify-center">
                      <img src="https://media.chingari.io/apipublic/chingari-web-assets/icons/browser.svg" alt="Web" className="h-14 w-auto" />
                    </div>
                  </div>
                </div>

                {/* User Stats - Responsive Grid */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-8">
                  <div className="flex -space-x-4 overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/50 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transition-transform hover:scale-110">
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
            <div className="w-full md:w-1/2 relative mr-10 z-10 mt-8 md:mt-0">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="relative mx-auto max-w-sm md:max-w-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-3xl"></div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/bilky-80c73.firebasestorage.app/o/Untitled%20design(1).gif?alt=media&token=549ae4dc-b3fb-493b-a5f5-3f78dc5b9016"
                    alt="App Interface"
                    className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Cards */}
                  <div className="hidden sm:block absolute -left-4 md:-left-10 top-1/4 bg-white/10 backdrop-blur-lg p-3 md:p-4 rounded-xl shadow-lg">
                    <BsHeartFill className="text-pink-500 w-5 h-5 md:w-6 md:h-6 mb-2" />
                    <div className="text-xs md:text-sm text-white">Live Streaming</div>
                  </div>
                  <div className="hidden sm:block absolute -right-4 top-1/2 bg-white/10 backdrop-blur-lg p-3 md:p-4 rounded-xl shadow-lg">
                    <Music className="text-purple-500 w-5 h-5 md:w-6 md:h-6 mb-2" />
                    <div className="text-xs md:text-sm text-white">Audio Rooms</div>
                  </div>
                  <div className="hidden sm:block absolute -left-4 md:-left-16 bottom-1/3 bg-white/10 backdrop-blur-lg p-3 md:p-4 rounded-xl shadow-lg">
                    <Gamepad className="text-indigo-500 w-5 h-5 md:w-6 md:h-6 mb-2" />
                    <div className="text-xs md:text-sm text-white">Gaming</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
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
                },
                {
                  icon: Users,
                  title: "Global Community",
                  description: "Connect with millions worldwide",
                },
                {
                  icon: Heart,
                  title: "Interactive Features",
                  description: "Engage with your audience",
                },
                {
                  icon: MdNearMe,
                  title: "Near Me",
                  description: "Discover local connections",
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-900 to-pink-400"
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

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-purple-500/90 to-pink-600/90"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 -top-20 -left-20 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-72 h-72 -bottom-20 -right-20 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Fixed position decorative elements */}
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="absolute bottom-1/2 right-10 w-2 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-pink-200 text-sm mb-4">
              Love Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success Stories from
              <span className="block bg-gradient-to-r from-pink-300 to-white text-transparent bg-clip-text">
                Our Happy Couples
              </span>
            </h2>
            <p className="text-lg text-pink-100/80 max-w-2xl mx-auto">
              Join thousands of couples who found their perfect match on Bilky. Your love story could be next!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah & Mike",
                location: "New York",
                story: "We matched on Bilky and instantly connected over our shared love for adventure. Six months later, we're engaged!",
                image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                rating: 5,
                date: "3 months ago"
              },
              {
                name: "David & Emma",
                location: "London",
                story: "Thanks to Bilky's perfect matching algorithm, we found each other despite living in different parts of the city.",
                image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                rating: 5,
                date: "1 month ago"
              },
              {
                name: "Jessica & Tom",
                location: "Sydney",
                story: "What started as a simple chat turned into the most meaningful relationship of our lives. Bilky made it possible!",
                image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                rating: 5,
                date: "2 months ago"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-lg p-6 rounded-3xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                        <p className="text-sm text-pink-200">{testimonial.location}</p>
                      </div>
                      <span className="text-xs text-pink-200">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/90 mb-4 leading-relaxed">{testimonial.story}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Heart
                        key={i}
                        className="w-5 h-5 text-pink-400 fill-pink-400"
                      />
                    ))}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-200 text-sm">
                    Verified Match
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              className="px-8 py-6 bg-white text-purple-600 rounded-full hover:shadow-xl hover:shadow-white/25 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Start Your Love Story
                <Heart className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent)] opacity-70"></div>
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent)] opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
              Your Safety Matters
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Safe and Secure
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Dating Experience
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We prioritize your safety with industry-leading features and strict verification processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "ID Verification",
                description: "Every profile is verified using government-issued ID",
                icon: Shield,
                gradient: "from-purple-500 to-purple-600"
              },
              {
                title: "24/7 Support",
                description: "Our dedicated team is always here to help you",
                icon: HeadphonesIcon,
                gradient: "from-pink-500 to-pink-600"
              },
              {
                title: "Safe Messaging",
                description: "End-to-end encrypted chats for your privacy",
                icon: Lock,
                gradient: "from-purple-500 to-purple-600"
              },
              {
                title: "Report System",
                description: "Easy reporting system to maintain community safety",
                icon: Flag,
                gradient: "from-pink-500 to-pink-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 -top-20 -left-20 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-72 h-72 -bottom-20 -right-20 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-pink-200 text-sm mb-4">
              Premium Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unlock the Full
              <span className="block text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text">
                Dating Experience
              </span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Upgrade to premium and get access to exclusive features that increase your chances of finding the perfect match
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "See Who Likes You",
                description: "Know who's interested before matching",
                icon: Eye,
                highlight: true
              },
              {
                title: "Advanced Filters",
                description: "Find exactly what you're looking for",
                icon: SlidersHorizontal
              },
              {
                title: "Priority Matching",
                description: "Get shown to more potential matches",
                icon: Zap
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group p-6 rounded-3xl backdrop-blur-lg transition-all duration-300 transform hover:-translate-y-2 ${
                  feature.highlight 
                    ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10' 
                    : 'bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-pink-300" />
                  </div>
                  {feature.highlight && (
                    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-200 text-sm">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group">
              <span className="flex items-center gap-2">
                Upgrade to Premium
                <Crown className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
              Why Choose Bilky
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Features that Make Us
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Stand Out
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the next generation of dating with our cutting-edge features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Matching",
                description: "Our AI-powered algorithm learns your preferences to find your perfect match",
                icon: Sparkles,
                color: "purple"
              },
              {
                title: "Video Dating",
                description: "Connect face-to-face with potential matches in a safe, moderated environment",
                icon: Heart,
                color: "pink"
              },
              {
                title: "Local Events",
                description: "Meet like-minded singles at curated events in your area",
                icon: Users,
                color: "purple"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-500`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

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