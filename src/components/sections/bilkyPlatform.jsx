"use client";
import React from 'react';
import { Heart, Users, Gift, Shield } from 'lucide-react';

const bilkyPlatform = () => {
    return (
        <div className="p-4 bg-white">
            <div className="m-10 bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
                <div className="p-8 text-purple-500 flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl font-bold mb-4 flex items-center">
                        What makes Bilky special!
                    </h1>
                    <p className="text-xl mb-6 opacity-80">
                        Revolutionizing Audio Streaming Connections
                    </p>

                    {/* Image goes here */}
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/bilky-80c73.firebasestorage.app/o/WhatsApp%20Image%202025-02-01%20at%2012.06.25_18169544-landscape.png?alt=media&token=429c975d-64e7-4dc5-aa40-dd9b5eecf60e"
                        alt="Bilky Special Feature"
                    />
                </div>
                <div className="p-8">
                    <div className="space-y-10">
                        <div className="flex items-center">
                            <Users className="text-pink-500 mr-4" size={32} />
                            <div>
                                <h3 className="font-bold text-pink-600 text-xl">Matchmaker Experience</h3>
                                <p className="text-gray-600">Innovative audio-driven connection platform</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Gift className="text-purple-500 mr-4" size={32} />
                            <div>
                                <h3 className="font-bold text-purple-600 text-xl">Virtual Gifting Monetization</h3>
                                <p className="text-gray-600">Engaging revenue model through interactive gifts</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Shield className="text-green-500 mr-4" size={32} />
                            <div>
                                <h3 className="font-bold text-green-400 text-xl">Safe Community</h3>
                                <p className="text-gray-600">Moderated, respectful, and non-sleazy interactions</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Heart className="text-red-500 mr-4" size={32} />
                            <div>
                                <h3 className="font-bold text-pink-500 text-xl">Audio-First Connections</h3>
                                <p className="text-gray-600">Authentic interactions through voice and sound</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex space-x-4">
                        <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
                            Explore Bilky
                        </button>
                        <button className="border border-pink-500 text-pink-500 px-6 py-3 rounded-full hover:bg-pink-50 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default bilkyPlatform;