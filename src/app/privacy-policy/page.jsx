import React from 'react';
import { Shield, Lock, Eye, Server } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information provided during registration",
        "Profile information and preferences",
        "Communication data and messages",
        "Usage data and activity logs",
        "Device information and location data"
      ]
    },
    {
      title: "How We Use Your Data",
      icon: Server,
      content: [
        "Matching you with potential partners",
        "Improving our services and user experience",
        "Ensuring platform safety and security",
        "Communicating updates and features",
        "Analytics and performance monitoring"
      ]
    },
    {
      title: "Data Protection",
      icon: Lock,
      content: [
        "End-to-end encryption for messages",
        "Secure data storage and transmission",
        "Regular security audits and updates",
        "Access controls and authentication",
        "Data backup and recovery protocols"
      ]
    },
    {
      title: "Your Rights",
      icon: Shield,
      content: [
        "Access to your personal data",
        "Right to data portability",
        "Right to delete your account",
        "Control over privacy settings",
        "Option to opt-out of communications"
      ]
    }
  ];

  const lastUpdated = "February 18, 2024";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
            Privacy Policy
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Privacy
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Matters to Us
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us About Privacy</h2>
          <p className="text-gray-600 mb-8">
            If you have any questions about our privacy policy or how we handle your data, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
              Contact Privacy Team
            </button>
            <button className="px-8 py-4 bg-white border border-purple-200 text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300">
              Download Full Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
