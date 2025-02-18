import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Heart, Play, Instagram, Twitter, Facebook, Youtube, Mail, Shield, Users, BookOpen, Phone, Cookie, ServerIcon } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { BsAndroid } from 'react-icons/bs';
import { MdPolicy } from 'react-icons/md';
import { CgCommunity } from 'react-icons/cg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Instagram, href: 'https://instagram.com/bilkylive', label: 'Instagram' },
        { icon: Twitter, href: 'https://twitter.com/bilkylive', label: 'Twitter' },
        { icon: Facebook, href: 'https://facebook.com/bilkylive', label: 'Facebook' },
        { icon: FaYoutube, href: 'https://youtube.com/bilkylive', label: 'YouTube' }
    ];

    const sections = [
        {
            title: "Find Love",
            links: [
                { icon: Users, text: "Success Stories", href: "/success-stories" },
                { icon: BookOpen, text: "Dating Tips", href: "/dating-tips" },
                { icon: Shield, text: "Safety Guide", href: "/safety-guide" },
                { icon: Phone, text: "Support", href: "/support" }
            ]
        },
        {
            title: "Legal",
            links: [
                { icon: MdPolicy, text: "Privacy Policy", href: "/privacy-policy" },
                { icon: ServerIcon, text: "Terms of Service", href: "/terms-of-service" },
                { icon: Cookie, text: "Cookie Policy", href: "/cookie-policy" },
                { icon: CgCommunity, text: "Community Guidelines", href: "/community-guidelines" }
            ]
        }
    ];

    const appLinks = {
        appStore: "https://apps.apple.com/app/bilky-live",
        playStore: "https://play.google.com/store/apps/details?id=com.bilkylive"
    };

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
                        <Link href="/" className="inline-block">
                            <div className="flex items-center space-x-2">
                                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                                    Bilky Live
                                </h3>
                            </div>
                        </Link>
                        <p className="text-sm md:text-base text-gray-300">
                            Connecting hearts worldwide through meaningful live video connections.
                        </p>
                        <a 
                            href="mailto:support@bilkylive.com"
                            className="flex items-center space-x-4 hover:text-pink-400 transition-colors"
                        >
                            <Mail className="w-4 h-4 text-pink-400" />
                            <span className="text-xs md:text-sm text-gray-100">support@bilkylive.com</span>
                        </a>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-pink-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-lg font-semibold">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link 
                                            href={link.href}
                                            className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2"
                                        >
                                            <link.icon className="w-4 h-4" />
                                            <span className="text-sm md:text-base">{link.text}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Download Our App</h3>
                        <div className="space-y-4">
                            <a 
                                href={appLinks.appStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block transition-transform hover:scale-105"
                            >
                                <img 
                                    src="https://media.chingari.io/apipublic/chingari-web-assets/icons/app-store.svg" 
                                    alt="Download on App Store" 
                                    className="h-14 w-auto"
                                />
                            </a>
                            <a 
                                href={appLinks.playStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block transition-transform hover:scale-105"
                            >
                                <img 
                                    src="https://media.chingari.io/apipublic/chingari-web-assets/icons/play-store.svg" 
                                    alt="Get it on Google Play" 
                                    className="h-14 w-auto"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12 gap-4 text-center md:text-left">
                    <div className="text-gray-300 text-xs md:text-sm">
                        &copy; {currentYear} Bilky Live. All rights reserved.
                    </div>
                    <div className="text-gray-300 text-xs md:text-sm">
                        Made with ❤️ by{' '}
                        <a 
                            href="https://bilkylive.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-400 hover:text-pink-300"
                        >
                            Bilky Live
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;