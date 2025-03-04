"use client";
import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  AlertCircle, 
  Phone, 
  Users, 
  Eye, 
  Bell, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

const SafetyPolicyPage = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionKey) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const policySections = [
    {
      key: 'userVerification',
      title: 'User Verification',
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Shield className="text-purple-400" />
            <h3 className="text-lg font-semibold">Comprehensive Verification Process</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Mandatory email or phone verification</li>
            <li>Optional ID verification for enhanced trust</li>
            <li>Advanced profile screening algorithms</li>
            <li>Real-time profile authenticity checks</li>
          </ul>
        </div>
      )
    },
    {
      key: 'dataProtection',
      title: 'Data Protection',
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Lock className="text-purple-600" />
            <h3 className="text-lg font-semibold">Secure Data Handling</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>End-to-end encryption for all communications</li>
            <li>GDPR and CCPA compliant data management</li>
            <li>Regular security audits and updates</li>
            <li>Transparent data usage policies</li>
          </ul>
        </div>
      )
    },
    {
      key: 'communicationSafety',
      title: 'Communication Safety',
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <MessageCircle className="text-purple-600" />
            <h3 className="text-lg font-semibold">Secure Messaging Environment</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>AI-powered content moderation</li>
            <li>Instant blocking and reporting features</li>
            <li>Harassment prevention mechanisms</li>
            <li>User behavior monitoring</li>
          </ul>
        </div>
      )
    }
  ];

  const emergencyContacts = [
    {
      title: "24/7 Support",
      description: "Our support team is always available",
      contact: "support@bilkylive.com",
      icon: Phone
    },
    {
      title: "Emergency Services",
      description: "If you feel unsafe or threatened",
      icon: AlertCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bilky Live Safety Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your safety is our top priority. We are committed to creating a secure and respectful communication platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {policySections.map((section) => (
            <div key={section.key} className="border-b pb-4 last:border-b-0">
              <button 
                onClick={() => toggleSection(section.key)}
                className="w-full flex justify-between items-center text-left"
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  {section.title}
                </h2>
                {openSections[section.key] ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openSections[section.key] && (
                <div className="mt-4 pl-4 border-l-4 border-purple-500">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Emergency Contacts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div 
                key={index} 
                className="bg-purple-50 rounded-xl p-6 flex items-center space-x-4"
              >
                <div className="bg-purple-200 p-3 rounded-full">
                  <contact.icon className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">{contact.title}</h3>
                  <p className="text-gray-600">{contact.description}</p>
                  <p className="text-purple-600 font-medium mt-2">{contact.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-xl transition-all">
            Report a Safety Concern
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafetyPolicyPage;