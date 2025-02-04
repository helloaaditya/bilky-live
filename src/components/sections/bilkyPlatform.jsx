import React from 'react';
import { Heart, Users, Gift, Shield } from 'lucide-react';

const BilkyPlatform = () => {
    return (
        <div className="p-4 bg-white">
            <div className="mx-4 md:m-10 bg-white shadow-2xl rounded-3xl overflow-hidden">
                <div className="flex flex-col md:grid md:grid-cols-2">
                    <div className="p-4 md:p-8 text-purple-500 flex flex-col justify-center items-center text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 flex items-center">
                            What makes Bilky special!
                        </h1>
                        <p className="text-lg md:text-xl mb-4 md:mb-6 opacity-80">
                            Revolutionizing Audio Streaming Connections
                        </p>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/bilky-80c73.firebasestorage.app/o/WhatsApp%20Image%202025-02-01%20at%2012.06.25_18169544-landscape.png?alt=media&token=429c975d-64e7-4dc5-aa40-dd9b5eecf60e"
                            alt="Bilky Special Feature"
                            className="w-full max-w-md rounded-lg"
                        />
                    </div>

                    <div className="p-4 md:p-8">
                        <div className="space-y-6 md:space-y-10">
                            {[
                                {
                                    icon: Users,
                                    title: "Matchmaker Experience",
                                    description: "Innovative audio-driven connection platform",
                                    color: "pink"
                                },
                                {
                                    icon: Gift,
                                    title: "Virtual Gifting Monetization",
                                    description: "Engaging revenue model through interactive gifts",
                                    color: "purple"
                                },
                                {
                                    icon: Shield,
                                    title: "Safe Community",
                                    description: "Moderated, respectful, and non-sleazy interactions",
                                    color: "pink"
                                },
                                {
                                    icon: Heart,
                                    title: "Audio-First Connections",
                                    description: "Authentic interactions through voice and sound",
                                    color: "purple"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start md:items-center">
                                    <feature.icon 
                                        className={`text-${feature.color}-500 mr-4 flex-shrink-0`} 
                                        size={28} 
                                    />
                                    <div>
                                        <h3 className={`font-bold text-${feature.color}-600 text-lg md:text-xl`}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 sm:space-x-4">
                            <button className="w-full sm:w-auto bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition text-sm md:text-base">
                                Explore Bilky
                            </button>
                            <button className="w-full sm:w-auto border border-pink-500 text-pink-500 px-6 py-3 rounded-full hover:bg-pink-50 transition text-sm md:text-base">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BilkyPlatform;