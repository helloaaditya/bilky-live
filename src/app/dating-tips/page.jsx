import React from 'react';
import { Heart, Coffee, Camera, MessageCircle, Calendar, Star, Users } from 'lucide-react';

const DatingTips = () => {
  const tips = [
    {
      title: "Perfect Your Profile",
      description: "Learn how to create an authentic and attractive profile that showcases your personality.",
      icon: Camera,
      tips: [
        "Choose recent, high-quality photos",
        "Write an engaging bio",
        "Be honest about your interests"
      ]
    },
    {
      title: "First Date Success",
      description: "Essential tips for making your first date memorable and comfortable for both parties.",
      icon: Coffee,
      tips: [
        "Choose a public, casual location",
        "Ask engaging questions",
        "Be yourself and stay relaxed"
      ]
    },
    {
      title: "Effective Communication",
      description: "Master the art of meaningful conversations and building connections.",
      icon: MessageCircle,
      tips: [
        "Ask open-ended questions",
        "Practice active listening",
        "Share personal stories"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
            Dating Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dating Tips
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              For Success
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice to help you navigate the world of modern dating and find meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <tip.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
              <p className="text-gray-600 mb-6">{tip.description}</p>
              <ul className="space-y-3">
                {tip.tips.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Need More Personal Advice?
              </h2>
              <p className="text-gray-600 mb-8">
                Our dating experts are here to help you with personalized guidance for your dating journey.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                Book a Consultation
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-100 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">1000+</div>
                <div className="text-purple-600">Successful Matches</div>
              </div>
              <div className="bg-pink-100 rounded-2xl p-6 text-center">
                <Calendar className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-pink-600">24/7</div>
                <div className="text-pink-600">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatingTips;
