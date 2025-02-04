import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Heart,
    Play,
    Apple,
    Instagram,
    Twitter,
    Facebook,
    Youtube,
    Mail,
    Shield,
    Users,
    BookOpen,
    Phone,
    Cookie,
    ServerIcon
} from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { BsAndroid } from 'react-icons/bs';
import { MdPolicy } from 'react-icons/md';
import { CgCommunity } from 'react-icons/cg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900 text-white py-16 relative overflow-hidden">
            {/* Background Hearts */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
                {[...Array(12)].map((_, i) => (
                    <Heart
                        key={i}
                        className="absolute w-24 h-24 text-pink-200"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-10 px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                                Bilky Live
                            </h3>
                        </div>
                        <p className="text-gray-300">
                            Connecting hearts worldwide through meaningful live video connections.
                        </p>
                        <div className="">
                            <Mail className="w-4 h-4 text-pink-400" />
                            <span className="text-sm text-gray-400">support@bilkylive.com</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                                <FaYoutube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Find Love</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    <span>Success Stories</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" />
                                    <span>Dating Tips</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    <span>Safety Guide</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>Support</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                                <MdPolicy className="w-4 h-4" />
                                <span>Privacy Policy</span>
                                </a>  
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                                <ServerIcon className="w-4 h-4" />
                                <span>Terms of Service</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                                <Cookie className="w-4 h-4" />
                                <span>Cookie Policy</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2">
                                <CgCommunity className="w-4 h-4" />
                                <span>Community Guidelines</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Download Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Get the App</h3>
                        <div className="space-y-4">
                            <Button
                                size="lg"
                                className="bg-white text-purple-900 hover:bg-white/90 rounded-full px-10 flex items-center"
                                onClick={() => window.open('https://play.google.com/store', '_blank')}
                            >
                                <div className="flex items-center">
                                    <Play className="w-6 h-6 mr-2 fill-current" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs leading-tight font-bold">GET IT ON</span>
                                        <span className="text-sm font-semibold ">Google Play</span>
                                    </div>
                                </div>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="text-green-500 border-white bg-white hover:bg-white/90 rounded-full px-8 flex items-center"
                            >
                                <BsAndroid className="w-5 h-5 mr-2" />
                                <div className="flex flex-col items-start">
                                    <span className="text-xs leading-tight font-bold">Download</span>
                                    <span className="text-sm font-semibold">Android APK</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="items-center justify-center mt-8">
                    <div className="text-gray-300 text-sm text-center">
                        &copy; {currentYear} Bilky Live. All rights reserved.
                    </div>
                    <div className="text-gray-300 text-sm text-center">
                        Made with ❤️ by <a href="https://bilkylive.com" className="text-pink-400 hover:text-pink-500 transition-colors">Bilky Live</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;