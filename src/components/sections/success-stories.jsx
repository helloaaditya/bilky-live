"use client";
import React from 'react';

const SuccessStories = () => {
    const stories = [
        {
            id: 1,
            title: 'Success Story 1',
            description: 'This is a brief description of success story 1.',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            title: 'Success Story 2',
            description: 'This is a brief description of success story 2.',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            title: 'Success Story 3',
            description: 'This is a brief description of success story 3.',
            image: 'https://via.placeholder.com/150'
        }
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map(story => (
                        <div key={story.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                            <p className="text-gray-700">{story.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;