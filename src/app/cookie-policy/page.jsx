import React from 'react';
import { Cookie, Settings, Shield, Clock } from 'lucide-react';

const CookiePolicy = () => {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: Cookie,
      description: "Required for basic site functionality",
      examples: [
        "Authentication",
        "Security features",
        "User preferences",
        "Session management"
      ]
    },
    {
      title: "Analytics Cookies",
      icon: Settings,
      description: "Help us understand how visitors interact with our site",
      examples: [
        "Page views",
        "Navigation paths",
        "Time spent on site",
        "Error encounters"
      ]
    },
    {
      title: "Marketing Cookies",
      icon: Clock,
      description: "Used to deliver relevant advertisements",
      examples: [
        "Ad personalization",
        "Campaign measurement",
        "Interest tracking",
        "Remarketing"
      ]
    }
  ];

  const lastUpdated = "February 18, 2024";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
            Cookie Policy
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Use
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Cookies
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use cookies to enhance your experience and improve our services. Learn more about how we use them below.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cookieTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <type.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              <ul className="space-y-3">
                {type.examples.map((example, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                    <span className="text-gray-700">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookie Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Cookie Choices</h3>
              <p className="text-gray-600 mb-6">
                You can manage your cookie preferences at any time. Here's how you can control your cookie settings:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                  <span className="text-gray-700">Browser settings adjustment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                  <span className="text-gray-700">Cookie preference center</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                  <span className="text-gray-700">Third-party opt-out tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Privacy First</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We respect your privacy and give you control over your data. Essential cookies are required for basic functionality, but you can opt out of non-essential cookies.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                Manage Cookie Preferences
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-8">
            Have questions about our cookie policy?
          </p>
          <button className="px-8 py-4 bg-white border border-purple-200 text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300">
            Contact Our Privacy Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
