"use client";

import { useState } from "react";

interface Message {
  type: "ai" | "user";
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "ai",
      content: "Hi! I'm your personal shopping assistant. I can help you discover amazing products, plan outfits, and find deals that match your style and budget. What are you looking for today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { type: "user", content: inputMessage }]);
      setInputMessage("");
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: "ai",
          content: "I'd love to help you with that! While I'm still in development, I'll soon be able to give you personalized recommendations based on your style, budget, and current trends. Join our waitlist to be among the first to try the full AI experience!"
        }]);
      }, 1000);
    }
  };

  return (
    <div className="bg-light/5 rounded-2xl border border-light/10 backdrop-blur-sm overflow-hidden hover:border-primary-green/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(254,224,114,0.1)]">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-primary-green to-primary-green/80 p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/10 to-transparent"></div>
        <div className="flex items-center space-x-3 relative z-10">
          <div className="relative w-10 h-10 bg-dark rounded-full flex items-center justify-center group">
            <svg className="w-6 h-6 text-primary-green transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <div className="absolute inset-0 bg-primary-yellow/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          <div>
            <h3 className="text-dark font-bold drop-shadow-sm">LootAI Assistant</h3>
            <p className="text-dark/80 text-sm">Online - Ready to help</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-dark/50">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.type === "user" 
                ? "bg-primary-purple text-light" 
                : "bg-light/10 text-light border border-light/20"
            }`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-light/20 p-4 bg-dark/30">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me about products, styles, or trends..."
            className="flex-1 px-4 py-2 border border-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green bg-dark/50 text-light placeholder-light/50"
          />
          <button
            onClick={handleSendMessage}
            className="group bg-primary-green text-dark px-6 py-2 rounded-lg hover:bg-primary-green/90 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(254,224,114,0.5)] relative overflow-hidden"
          >
            <span className="relative z-10">Send</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
} 