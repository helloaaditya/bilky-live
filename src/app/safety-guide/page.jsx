import React from 'react';
import { Shield, Lock, AlertCircle, Phone, Users, Eye, Bell, MessageCircle } from 'lucide-react';

const SafetyGuide = () => {
  const safetyTips = [
    {
      title: "Profile Privacy",
      description: "Control what information you share and who can see it.",
      icon: Lock,
      tips: [
        "Never share personal financial information",
        "Keep personal details private initially",
        "Use our built-in privacy controls"
      ]
    },
    {
      title: "Safe Meetings",
      description: "Guidelines for meeting matches in person safely.",
      icon: Users,
      tips: [
        "Meet in public places",
        "Tell friends about your plans",
        "Trust your instincts"
      ]
    },
    {
      title: "Online Safety",
      description: "Best practices for safe online interactions.",
      icon: Shield,
      tips: [
        "Use our in-app communication",
        "Report suspicious behavior",
        "Be cautious with personal info"
      ]
    }
  ];

  const emergencyContacts = [
    {
      title: "24/7 Support",
      description: "Our support team is always here to help",
      icon: Phone,
      contact: "support@bilkylive.com"
    },
    {
      title: "Emergency Services",
      description: "If you feel unsafe or threatened",
      icon: AlertCircle,
      contact: "Call 911 (US) or local emergency number"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
            Safety First
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Safety
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Is Our Priority
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've implemented comprehensive safety measures to ensure you can focus on finding meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {safetyTips.map((tip, index) => (
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
                    <Shield className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Safety Features
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Bell, text: "Real-time alerts" },
                  { icon: Eye, text: "Profile verification" },
                  { icon: MessageCircle, text: "Secure messaging" },
                  { icon: Shield, text: "24/7 monitoring" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <feature.icon className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Emergency Contacts
              </h2>
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{contact.title}</h3>
                    <p className="text-gray-600">{contact.description}</p>
                    <p className="text-purple-600 font-medium">{contact.contact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
            Report a Concern
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafetyGuide;
