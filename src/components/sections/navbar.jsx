"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart, Bell, User, MessageCircle, LanguagesIcon, Languages } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ModernNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Discover', options: ['Nearby', 'Featured', 'New Members'] },
        { name: 'Events', options: ['Local Meetups', 'Speed Dating', 'Social Mixers'] },
        { name: 'Tips & Guides', options: ['Dating Tips', 'Success Stories', 'Safety Guide'] },
        { name: 'Premium', options: ['Features', 'Pricing', 'Compare Plans'] }
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-gradient-to-r from-pink-500 to-purple-600 py-4'
                }`}>
                <div className="container px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center ">
                                <span className={`text-2xl ml-2 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text ${isScrolled ? 'text-pink-500' : 'bg-gradient-to-r from-white to-black'
                                    }`}>
                                    Bilky Live
                                </span>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center space-x-1">
                                {menuItems.map((item) => (
                                    <div key={item.name} className="relative group">
                                        <button className={`px-4 py-2 rounded-full flex items-center space-x-1 transition-colors ${isScrolled ? 'text-gray-600 hover:text-pink-500' : 'text-white/90 hover:text-white'
                                            }`}>
                                            <span>{item.name}</span>
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                        {/* Dropdown */}
                                        <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-white rounded-xl shadow-xl p-2">
                                                {item.options.map((option) => (
                                                    <a
                                                        key={option}
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg"
                                                    >
                                                        {option}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side Items */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`rounded-full ${isScrolled ? 'text-gray-600 hover:text-pink-500' : 'text-white hover:text-pink-200'}`}
                            >
                                <MessageCircle className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`rounded-full ${isScrolled ? 'text-gray-600 hover:text-pink-500' : 'text-white hover:text-pink-200'}`}
                            >
                                <Bell className="w-5 h-5" />
                            </Button>
                            <div className="h-6 w-px bg-gray-300"></div>
                            <Button
                                className={`rounded-full ${isScrolled
                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90'
                                        : 'bg-white text-pink-500 hover:bg-white/90'
                                    }`}
                            >
                                💖 Find Love Today
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`rounded-full ${isScrolled ? 'text-gray-600 hover:text-pink-500' : 'text-white hover:text-pink-200'}`}
                            >
                                <Languages className="w-5 h-5" />
                            </Button>

                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={isScrolled ? 'text-gray-600' : 'text-white'}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                        ? 'max-h-screen opacity-100 visible'
                        : 'max-h-0 opacity-0 invisible'
                    }`}>
                    <div className="bg-white shadow-lg px-4 py-3 space-y-3">
                        {menuItems.map((item) => (
                            <div key={item.name} className="space-y-2">
                                <div className="px-4 py-2 text-gray-600 font-medium">
                                    {item.name}
                                </div>
                                {item.options.map((option) => (
                                    <a
                                        key={option}
                                        href="#"
                                        className="block px-8 py-2 text-gray-500 hover:bg-pink-50 hover:text-pink-500 rounded-lg"
                                    >
                                        {option}
                                    </a>
                                ))}
                            </div>
                        ))}
                        <div className="pt-4">
                            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 rounded-full">
                                Find Love Today
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer for content */}
            <div className="h-20"></div>
        </>
    );
};

export default ModernNavbar;