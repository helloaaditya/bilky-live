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
            {/* Hero Section */}
            <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700">

                {/* Main Content */}
                <div className="container mx-auto px-4 pt-32 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Left Content */}
                        <div className="md:w-1/2 text-white z-10 ml-10">
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h1 className="text-6xl md:text-7xl font-bold mb-6">
                                    Start Your
                                    <span className="block bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                                        Journey Today
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-300 mb-8">
                                    Join millions in the ultimate social experience. Live streaming, gaming, and endless possibilities await.
                                </p>
                                <div className="flex flex-wrap gap-4 mb-12">
                                    <Button
                                        size="lg"
                                        className="bg-white text-green-400 hover:bg-white/90 rounded-full px-10 flex items-center"
                                        onClick={() => window.open('https://play.google.com/store', '_blank')}
                                    >
                                        <div className="flex items-center">
                                            <Play className="w-8 h-6 mr-2 fill-current" />
                                            <div className="flex flex-col items-start">
                                                <span className="text-xs leading-tight font-bold">GET IT ON</span>
                                                <span className="text-sm font-semibold ">Google Play</span>
                                            </div>
                                        </div>
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-purple-500 border-white w-50 h-16 bg-white hover:bg-white/90 rounded-full px-8 flex items-center"
                                    >
                                        <BsAndroid className="w-5 h-5 mr-2" />
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs leading-tight font-bold">Download</span>
                                            <span className="text-sm font-semibold">Android APK</span>
                                        </div>
                                    </Button>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="flex -space-x-4">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center">
                                                <Users className="w-6 h-6 text-white" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="font-bold text-2xl">1M+</div>
                                        <div className="text-gray-300">Active Users</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Phone Mockup */}
                        <div className="md:w-1/2 relative z-10">
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="relative">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/bilky-80c73.firebasestorage.app/o/Untitled%20design(1).gif?alt=media&token=549ae4dc-b3fb-493b-a5f5-3f78dc5b9016"
                                        alt="App Interface"
                                        className="w-800 h-800 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-tr"
                                    />

                                    {/* Floating Feature Cards */}
                                    <div className="absolute -left-10 top-1/8 bg-white p-4 rounded-xl shadow-lg animate-float">
                                        <BsHeartFill className="text-pink-500 w-6 h- mb-2" />
                                        <div className="text-sm text-pink-500 font-medium text-pink ">Live Streaming</div>
                                    </div>
                                    <div className="absolute -right-4 top-1/2 bg-white p-4 rounded-xl shadow-lg animate-float-delayed">
                                        <Music className="text-purple-500 w-6 h-6 mb-2" />
                                        <div className="text-sm text-purple-500 font-medium">Audio Rooms</div>
                                    </div>
                                    <div className="absolute -left-16 bottom-1/4 bg-white p-4 rounded-xl shadow-lg animate-float-more-delayed">
                                        <Gamepad className="text-indigo-500 w-6 h-6 mb-2" />
                                        <div className="text-sm text-indigo-500 font-medium">Gaming</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                    <ChevronDown className="w-6 h-6" />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl text-pink-500 font-bold mb-4">Why Choose Us ?</h2>
                        <p className="text-xl text-purple-500 text-gray-600">Experience the next generation of social interaction</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-10">
                        {[
                            {
                                icon: Sparkles,
                                title: "HD Streaming",
                                description: "Crystal clear video quality with low latency streaming technology for the best experience possible",
                                color: "pink"
                            },
                            {
                                icon: Users,
                                title: "Global Community",
                                description: "Connect with millions of users from around the world and make new friends every day",
                                color: "purple"
                            },
                            {
                                icon: Heart,
                                title: "Interactive Features",
                                description: "Engage with your audience through reactions and live chat during your streams and broadcasts",
                                color: "pink"
                            },
                            {
                                icon: MdNearMe,
                                title: "Near Me",
                                description: "Discover people near you and make new friends in your local area with our location-based feature",
                                color: "pink"
                            }


                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-900 to-pink-400"
                            >
                                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className={`h-6 w-6 text-${feature.color}-500`} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-white-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <BilkyPlatform />
            <StatsSection />
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