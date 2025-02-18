import React from 'react';
import { Users, Heart, MessageCircle, Shield, AlertTriangle, ThumbsUp, Flag, UserX } from 'lucide-react';

const CommunityGuidelines = () => {
  const guidelines = [
    {
      title: "Respect & Kindness",
      icon: Heart,
      description: "Treat everyone with respect and kindness",
      rules: [
        "Be polite and courteous in all interactions",
        "Respect others' boundaries and preferences",
        "Celebrate diversity and inclusion",
        "Practice empathy and understanding"
      ]
    },
    {
      title: "Communication",
      icon: MessageCircle,
      description: "Maintain appropriate and respectful communication",
      rules: [
        "No hate speech or harassment",
        "Avoid offensive language",
        "No spam or unwanted messages",
        "Keep conversations respectful"
      ]
    },
    {
      title: "Safety",
      icon: Shield,
      description: "Prioritize your safety and others'",
      rules: [
        "Never share personal information",
        "Report suspicious behavior",
        "Meet in public places",
        "Trust your instincts"
      ]
    },
    {
      title: "Content",
      icon: ThumbsUp,
      description: "Share appropriate content only",
      rules: [
        "No explicit or adult content",
        "No violent or graphic material",
        "No illegal content",
        "Keep it family-friendly"
      ]
    }
  ];

  const violations = [
    {
      title: "Reporting Violations",
      icon: Flag,
      points: [
        "Use the in-app reporting system",
        "Provide specific details",
        "Report immediately when witnessed",
        "Follow up if necessary"
      ]
    },
    {
      title: "Consequences",
      icon: UserX,
      points: [
        "Warnings for minor violations",
        "Temporary suspension",
        "Permanent account termination",
        "Possible legal action"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
            Community Guidelines
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Community
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Standards
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These guidelines help ensure a safe and positive environment for all members of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {guidelines.map((guideline, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                  <guideline.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{guideline.title}</h2>
                  <p className="text-gray-600">{guideline.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {guideline.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {violations.map((section, index) => (
              <div key={index}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
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
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Need Help?</h2>
          </div>
          <p className="text-gray-700 mb-8">
            If you witness any violations of these guidelines or need assistance, our support team is here to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
              Report a Violation
            </button>
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
