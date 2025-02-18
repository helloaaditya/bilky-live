import React from 'react';
import { Scale, UserCheck, AlertTriangle, Ban, MessageSquare, Shield } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      title: "User Agreement",
      icon: UserCheck,
      content: `By using Bilky Live, you agree to these terms and conditions. We reserve the right to modify these terms at any time, and your continued use of the service constitutes acceptance of any changes.`,
      points: [
        "Must be 18 years or older",
        "Provide accurate information",
        "Maintain account security",
        "Follow community guidelines"
      ]
    },
    {
      title: "Prohibited Activities",
      icon: Ban,
      content: `The following activities are strictly prohibited and may result in immediate account termination:`,
      points: [
        "Harassment or abuse",
        "Fake profiles or impersonation",
        "Spam or unauthorized advertising",
        "Illegal activities or content"
      ]
    },
    {
      title: "Content Guidelines",
      icon: MessageSquare,
      content: `All content shared on Bilky Live must adhere to our content guidelines:`,
      points: [
        "Respectful communication",
        "No explicit or adult content",
        "No hate speech or discrimination",
        "No copyrighted material without permission"
      ]
    },
    {
      title: "Safety & Security",
      icon: Shield,
      content: `We prioritize user safety and security through:`,
      points: [
        "Profile verification",
        "24/7 monitoring",
        "Report system",
        "Privacy controls"
      ]
    }
  ];

  const lastUpdated = "February 18, 2024";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
            Terms of Service
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms and Conditions
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              of Using Bilky Live
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our service.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8 mb-16">
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
              <p className="text-gray-700 mb-6">{section.content}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Important Notice</h2>
          </div>
          <p className="text-gray-600 mb-8">
            By using Bilky Live, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
              Accept Terms
            </button>
            <button className="px-8 py-4 bg-white border border-purple-200 text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300">
              Download Terms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
