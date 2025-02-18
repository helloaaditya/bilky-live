import React from 'react';
import { Heart } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      names: "Sarah & Mike",
      location: "New York",
      story: "We matched on Bilky and instantly connected over our shared love for adventure. Six months later, we're engaged!",
      image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      date: "March 2024"
    },
    {
      names: "David & Emma",
      location: "London",
      story: "Thanks to Bilky's perfect matching algorithm, we found each other despite living in different parts of the city.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      date: "January 2024"
    },
    {
      names: "Jessica & Tom",
      location: "Sydney",
      story: "What started as a simple chat turned into the most meaningful relationship of our lives. Bilky made it possible!",
      image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      date: "February 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
            Love Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              That Inspire
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real people, real connections, real love stories. Get inspired by couples who found their perfect match on Bilky.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <img
                  src={story.image}
                  alt={story.names}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{story.names}</h3>
                  <p className="text-sm text-gray-200">{story.location}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{story.story}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{story.date}</span>
                <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Ready to write your own success story?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
