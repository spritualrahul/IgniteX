'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare, X, Phone, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'service-selection' | 'callback-request' | 'phone-input' | 'confirmation' | 'further-assistance';
  serviceType?: string;
};

const SERVICES = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'SEO & Digital Marketing',
  'E-commerce Solutions',
  'Custom Software Development',
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setShowServiceSelection] = useState(false);
  const [, setShowPhoneInput] = useState(false);
  const [, setIsSuccess] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to IgniteX. What type of service are you interested in?',
      sender: 'bot',
      timestamp: new Date(),
      type: 'service-selection',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleServiceSelect = (service: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: service,
      sender: 'user',
      timestamp: new Date(),
      type: 'service-selection',
      serviceType: service,
    };

    setMessages((prev) => [...prev, userMessage]);
    setSelectedService(service);
    setShowServiceSelection(false);
    
    // Show callback request
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Great choice! Would you like us to call you back to discuss ${service}?`,
        sender: 'bot',
        timestamp: new Date(),
        type: 'callback-request',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleCallbackRequest = (wantsCallback: boolean) => {
    if (wantsCallback) {
      setShowPhoneInput(true);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Please enter your phone number and we\'ll get back to you shortly!',
        sender: 'bot',
        timestamp: new Date(),
        type: 'phone-input',
      };
      setMessages((prev) => [...prev, botMessage]);
    } else {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'No problem! Feel free to ask me anything else about our services.',
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  const askForFurtherAssistance = () => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.text.includes('Is there anything else I can help you with')) {
      return;
    }
    
    setTimeout(() => {
      const assistanceMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Is there anything else I can help you with?',
        sender: 'bot',
        timestamp: new Date(),
        type: 'further-assistance',
      };
      setMessages((prev) => [...prev, assistanceMessage]);
    }, 1000);
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;

    setIsSubmitting(true);

    try {
      // Prepare EmailJS template parameters
      const templateParams = {
        chatbot_phone: phoneNumber,
        chatbot_service: selectedService,
        time: new Date().toLocaleString(),
      };

      // Send email using EmailJS with chatbot-specific template ID
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_CHATBOT_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thank you! We've received your request for ${selectedService}. Our team will contact you at ${phoneNumber} shortly.`,
        sender: 'bot',
        timestamp: new Date(),
        type: 'confirmation',
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setPhoneNumber('');
      setShowPhoneInput(false);
      setIsSuccess(true);
      
      askForFurtherAssistance();
      
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedService('');
      }, 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, there was an error processing your request. Please try again later.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
      type: 'text',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    if (!selectedService) {
      setShowServiceSelection(true);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'What type of service are you interested in?',
        sender: 'bot',
        timestamp: new Date(),
        type: 'service-selection',
      };
      setMessages((prev) => [...prev, botMessage]);
      return;
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputValue,
          service: selectedService,
        }),
      });

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I'm sorry, I couldn't process your request.",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
      };

      setMessages((prev) => [...prev, botMessage]);
      
      if (!inputValue.toLowerCase().includes('else') && !inputValue.toLowerCase().includes('further')) {
        askForFurtherAssistance();
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, there was an error processing your message.',
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-80 h-[500px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center">
              <h2 className="font-semibold text-lg">AI Assistant</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'service-selection' && message.sender === 'bot' ? (
                      <div className="w-full">
                        <p className="mb-2 text-sm text-gray-700">{message.text}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {SERVICES.map((service) => (
                            <button
                              key={service}
                              onClick={() => handleServiceSelect(service)}
                              className="p-2 text-sm text-left bg-white border text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : message.type === 'callback-request' ? (
                      <div className="flex flex-col space-y-2 w-full">
                        <p className="mb-2 text-gray-900">{message.text}</p>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleCallbackRequest(true)}
                            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-1"
                          >
                            <Phone size={16} />
                            <span>Yes, call me</span>
                          </button>
                          <button
                            onClick={() => handleCallbackRequest(false)}
                            className="flex-1 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            No, thanks
                          </button>
                        </div>
                      </div>
                    ) : message.type === 'phone-input' ? (
                      <div className="w-full">
                        <p className="mb-2 text-gray-900">{message.text}</p>
                        <form onSubmit={handlePhoneSubmit} className="flex space-x-2">
                          <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter your phone number"
                            className="flex-1 px-3 py-2 text-sm text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-4 py-2 text-sm font-medium text-white rounded-lg ${
                              isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
                            } transition-colors`}
                          >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                          </button>
                        </form>
                      </div>
                    ) : message.type === 'confirmation' ? (
                      <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Check className="flex-shrink-0 w-5 h-5 mt-0.5 text-green-500" />
                          <p className="text-green-800">{message.text}</p>
                        </div>
                      </div>
                    ) : message.type === 'further-assistance' ? (
                      <div className="flex flex-col space-y-2 w-full">
                        <p className="mb-2 text-gray-900">{message.text}</p>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              const botMessage: Message = {
                                id: Date.now().toString(),
                                text: 'Sure! Here are our services:',
                                sender: 'bot',
                                timestamp: new Date(),
                                type: 'service-selection',
                              };
                              setMessages(prev => [...prev, botMessage]);
                            }}
                            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                          >
                            Yes, show services
                          </button>
                          <button
                            onClick={() => {
                              const noThanksMessage: Message = {
                                id: Date.now().toString(),
                                text: 'No, thank you',
                                sender: 'user',
                                timestamp: new Date(),
                                type: 'text',
                              };
                              const botMessage: Message = {
                                id: (Date.now() + 1).toString(),
                                text: "You're welcome! Feel free to come back if you have any questions. Have a great day! 👋",
                                sender: 'bot',
                                timestamp: new Date(),
                                type: 'text',
                              };
                              setMessages(prev => [...prev, noThanksMessage, botMessage]);
                            }}
                            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            No, I&apos;m good
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-blue-500 text-white rounded-br-none'
                            : 'bg-gray-100 text-gray-900 rounded-bl-none'
                        }`}
                      >
                        {message.text}
                      </div>
                    )}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border text-gray-900 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
            aria-label="Open chat"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}