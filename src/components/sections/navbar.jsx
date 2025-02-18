"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart, Bell, User, MessageCircle, Search, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ModernNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { 
            name: 'Discover', 
            icon: Search,
            options: [
                { name: 'Nearby Singles', icon: Heart },
                { name: 'Featured Profiles', icon: Sparkles },
                { name: 'New Members', icon: User }
            ] 
        },
        { 
            name: 'Events', 
            icon: Sparkles,
            options: [
                { name: 'Local Meetups', icon: User },
                { name: 'Speed Dating', icon: Heart },
                { name: 'Social Mixers', icon: MessageCircle }
            ] 
        },
        { 
            name: 'Community', 
            icon: MessageCircle,
            options: [
                { name: 'Dating Tips', icon: Heart },
                { name: 'Success Stories', icon: Sparkles },
                { name: 'Safety Guide', icon: User }
            ] 
        }
    ];

    return (
        <nav 
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/80 backdrop-blur-lg shadow-lg py-2' 
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-8">
                        <div className="flex items-center">
                            <span className={`text-2xl font-bold bg-gradient-to-r ${
                                isScrolled 
                                    ? 'from-pink-500 to-purple-600' 
                                    : 'from-white to-pink-200'
                                } bg-clip-text text-transparent`}>
                                    Bilky Live
                                </span>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center space-x-1">
                                {menuItems.map((item) => (
                                <div 
                                    key={item.name} 
                                    className="relative"
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button 
                                        className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                                            isScrolled 
                                                ? 'text-gray-600 hover:text-pink-500 hover:bg-pink-50' 
                                                : 'text-white/90 hover:text-white hover:bg-white/10'
                                        }`}
                                    >
                                        <item.icon className="w-4 h-4" />
                                            <span>{item.name}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                            activeDropdown === item.name ? 'rotate-180' : ''
                                        }`} />
                                        </button>
                                    
                                        {/* Dropdown */}
                                    <div className={`absolute top-full left-0 mt-2 w-56 transition-all duration-300 ${
                                        activeDropdown === item.name 
                                            ? 'opacity-100 visible translate-y-0' 
                                            : 'opacity-0 invisible translate-y-2'
                                    }`}>
                                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-2 border border-gray-100">
                                                {item.options.map((option) => (
                                                    <a
                                                    key={option.name}
                                                        href="#"
                                                    className="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-500 rounded-xl transition-colors duration-300"
                                                    >
                                                    <option.icon className="w-4 h-4" />
                                                    <span>{option.name}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side Items */}
                    <div className="hidden md:flex items-center space-x-3">
                            <Button
                                variant="ghost"
                                size="icon"
                            className={`rounded-full hover:scale-110 transition-transform duration-300 ${
                                isScrolled 
                                    ? 'text-gray-600 hover:text-pink-500 hover:bg-pink-50' 
                                    : 'text-white hover:text-white hover:bg-white/10'
                            }`}
                            >
                                <MessageCircle className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                            className={`rounded-full hover:scale-110 transition-transform duration-300 ${
                                isScrolled 
                                    ? 'text-gray-600 hover:text-pink-500 hover:bg-pink-50' 
                                    : 'text-white hover:text-white hover:bg-white/10'
                            }`}
                            >
                                <Bell className="w-5 h-5" />
                            </Button>
                        <div className={`h-6 w-px ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`}></div>
                            <Button
                                variant="ghost"
                                size="icon"
                            className={`rounded-full hover:scale-110 transition-transform duration-300 ${
                                isScrolled 
                                    ? 'text-gray-600 hover:text-pink-500 hover:bg-pink-50' 
                                    : 'text-white hover:text-white hover:bg-white/10'
                            }`}
                            >
                                <User className="w-5 h-5" />
                            </Button>
                        <Button
                            className={`rounded-full px-6 transition-all duration-300 ${
                                isScrolled
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/25'
                                    : 'bg-white/20 backdrop-blur-lg text-white hover:bg-white/30'
                            }`}
                        >
                            Get Started
                        </Button>
                        </div>

                        {/* Mobile Menu Button */}
                    <button
                        className="md:hidden rounded-full p-2 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
                                ) : (
                            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
                                )}
                    </button>
                    </div>
                </div>

                {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ${
                isMobileMenuOpen 
                        ? 'max-h-screen opacity-100 visible'
                        : 'max-h-0 opacity-0 invisible'
                    }`}>
                <div className="container px-4 py-4 bg-white/80 backdrop-blur-lg mt-2">
                    <div className="space-y-4">
                        {menuItems.map((item) => (
                            <div key={item.name} className="space-y-2">
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <item.icon className="w-4 h-4" />
                                    <span className="font-medium">{item.name}</span>
                                </div>
                                <div className="pl-6 space-y-2">
                                {item.options.map((option) => (
                                    <a
                                            key={option.name}
                                        href="#"
                                            className="flex items-center space-x-2 text-sm text-gray-500 hover:text-pink-500"
                                    >
                                            <option.icon className="w-4 h-4" />
                                            <span>{option.name}</span>
                                    </a>
                                ))}
                            </div>
                            </div>
                        ))}
                        <div className="pt-4 border-t border-gray-100">
                            <Button
                                className="w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
    );
};

export default ModernNavbar;