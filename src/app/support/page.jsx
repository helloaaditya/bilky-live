import React from 'react';
import { MessageCircle, Phone, Mail, Clock, Search, BookOpen, Shield, Users } from 'lucide-react';

const Support = () => {
  const faqCategories = [
    {
      title: "Account Issues",
      icon: Users,
      questions: [
        {
          q: "How do I reset my password?",
          a: "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email."
        },
        {
          q: "How do I verify my profile?",
          a: "Profile verification can be done through the Profile Settings page by following our verification process."
        }
      ]
    },
    {
      title: "Safety Concerns",
      icon: Shield,
      questions: [
        {
          q: "How do I report inappropriate behavior?",
          a: "You can report any concerning behavior by using the report button on the user's profile or in chat conversations."
        },
        {
          q: "What safety features does Bilky offer?",
          a: "Bilky offers features like profile verification, secure messaging, and 24/7 support to ensure your safety."
        }
      ]
    }
  ];

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Chat with our support team",
      icon: MessageCircle,
      action: "Start Chat",
      availability: "24/7"
    },
    {
      title: "Phone Support",
      description: "Talk to a representative",
      icon: Phone,
      action: "Call Now",
      availability: "9 AM - 6 PM"
    },
    {
      title: "Email Support",
      description: "Get help via email",
      icon: Mail,
      action: "Send Email",
      availability: "24-48 hour response"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Can We
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-6 py-4 bg-white rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 pl-14"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <method.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">{method.availability}</span>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqCategories.map((category, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                {category.questions.map((faq, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
