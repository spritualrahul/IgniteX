'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const demos = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Custom websites built with modern technologies like Next.js, React, and Tailwind CSS for optimal performance and user experience.',
    icon: '🌐',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications using React Native, delivering native-like performance with a single codebase.',
    icon: '📱',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces designed with the latest design trends and user experience principles in mind.',
    icon: '🎨',
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 'seo',
    title: 'SEO & Analytics',
    description: 'Improve your online visibility and track performance with our comprehensive SEO and analytics solutions.',
    icon: '📊',
    color: 'from-green-500 to-green-600',
  },
];

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState(demos[0].id);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeDemo = demos.find(demo => demo.id === activeTab) || demos[0];

  const handleTabChange = (tabId: string) => {
    if (!isAnimating && tabId !== activeTab) {
      setIsAnimating(true);
      setActiveTab(tabId);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Interactive <span className="text-red-600">Demo</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our services through this interactive demo. Click on different tabs to see what we can do for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => handleTabChange(demo.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activeTab === demo.id 
                      ? 'bg-gradient-to-r text-white shadow-lg transform -translate-x-1' 
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  } ${activeTab === demo.id ? demo.color : ''}`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{demo.icon}</span>
                    <span className="font-medium">{demo.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex-1">
                    <div className="text-6xl mb-6">{activeDemo.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeDemo.title}</h3>
                    <p className="text-gray-600 mb-8">{activeDemo.description}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                            Learn More
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-red-600">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
