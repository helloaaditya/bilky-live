import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Play, Instagram, Twitter, Facebook, Youtube, Mail, Shield, Users, BookOpen, Phone, Cookie, ServerIcon } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { BsAndroid } from 'react-icons/bs';
import { MdPolicy } from 'react-icons/md';
import { CgCommunity } from 'react-icons/cg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900 text-white py-8 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-5">
                {[...Array(12)].map((_, i) => (
                    <Heart
                        key={i}
                        className="absolute w-16 md:w-24 h-16 md:h-24 text-pink-200"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-10 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                                Bilky Live
                            </h3>
                        </div>
                        <p className="text-sm md:text-base text-gray-300">
                            Connecting hearts worldwide through meaningful live video connections.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Mail className="w-4 h-4 text-pink-400" />
                            <span className="text-xs md:text-sm text-gray-100">support@bilkylive.com</span>
                        </div>
                        <div className="flex space-x-4">
                            {[Instagram, Twitter, Facebook, FaYoutube].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        {
                            title: "Find Love",
                            links: [
                                { icon: Users, text: "Success Stories" },
                                { icon: BookOpen, text: "Dating Tips" },
                                { icon: Shield, text: "Safety Guide" },
                                { icon: Phone, text: "Support" }
                            ]
                        },
                        {
                            title: "Legal",
                            links: [
                                { icon: MdPolicy, text: "Privacy Policy" },
                                { icon: ServerIcon, text: "Terms of Service" },
                                { icon: Cookie, text: "Cookie Policy" },
                                { icon: CgCommunity, text: "Community Guidelines" }
                            ]
                        }
                    ].map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-lg font-semibold">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                                            <link.icon className="w-4 h-4" />
                                            <span className="text-sm md:text-base">{link.text}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Get the App</h3>
                        <div className="space-y-3">
                            {[
                                {
                                    icon: Play,
                                    title: "GET IT ON",
                                    subtitle: "Google Play",
                                    variant: "default"
                                },
                                {
                                    icon: BsAndroid,
                                    title: "Download",
                                    subtitle: "Android APK",
                                    variant: "outline"
                                }
                            ].map((button, i) => (
                                <Button
                                    key={i}
                                    size="lg"
                                    variant={button.variant}
                                    className={`w-full ${button.variant === "outline" ? "text-green-500 border-white bg-white hover:bg-white/90" : "bg-white text-purple-900 hover:bg-white/90"} rounded-full flex items-center justify-center`}
                                >
                                    <button.icon className="w-5 h-5 mr-2" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold">{button.title}</span>
                                        <span className="text-sm font-semibold">{button.subtitle}</span>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12 gap-4 text-center md:text-left">
                    <div className="text-gray-300 text-xs md:text-sm">
                        &copy; {currentYear} Bilky Live. All rights reserved.
                    </div>
                    <div className="text-gray-300 text-xs md:text-sm">
                        Made with ❤️ by <a href="https://bilkylive.com" className="text-pink-400 hover:text-pink-300">Bilky Live</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;