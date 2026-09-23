--- src/components/ChatBot.tsx (原始)


+++ src/components/ChatBot.tsx (修改后)
import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const faqResponses: Record<string, string> = {
  'volunteer': 'To volunteer with The Remedy Foundation, visit our platform and register as a Volunteer. You can then register for events, log your hours, and earn certificates after 100 hours of service. Would you like help with registration?',
  'donate': 'You can make donations through our platform using Paystack (for Nigerian donors) or Stripe (for international donors). We accept one-time donations, monthly recurring donations, and child sponsorships. Every donation generates a downloadable receipt.',
  'sponsor': 'Child sponsorship allows you to support a specific child or a specific need (education, feeding, or healthcare). You\'ll receive periodic impact reports showing how your funds are used. Note: For child safety, we only share first-name-only updates — never private identifying information.',
  'contact': 'You can reach The Remedy Foundation through:\n• Email: info@remedyfoundation.org\n• Phone: +234 800 REMEDY\n• Visit: Remedy Foundation HQ, Lagos, Nigeria\n\nYou can also use this chat for quick questions!',
  'events': 'Upcoming events include:\n• Back to School Drive (Aug 15, Lagos)\n• Mentor Orientation Workshop (Jul 25, Virtual)\n• Community Health Fair (Jul 20, Abuja)\n• Annual Gala Dinner (Sep 30, Lagos)\n\nYou can register for events through the Events section of the platform.',
  'mentor': 'To become a mentor, register on the platform and specify your mentoring focus areas (academic, career, coding, emotional, life skills, entrepreneurship). Once approved, you\'ll be matched with children based on their needs and your expertise. All matches are approved by the Foundation Admin.',
  'guardian': 'Guardians can apply for support through the platform by submitting an application with basic household and child information. Once approved by the Foundation Admin, you can register your children, track their progress, and communicate with assigned mentors.',
  'mission': 'The Remedy Foundation provides every child with education, safety, mentorship, and opportunities irrespective of their background. We focus on vulnerable groups including orphans, neglected children, abuse victims, and children from poor families without access to education.',
  'default': 'Thank you for your question! I can help you with:\n• How to volunteer\n• How to donate or sponsor a child\n• Upcoming events\n• Contact information\n• Becoming a mentor\n• Guardian applications\n• Our mission\n\nPlease ask about any of these topics!'
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('volunteer')) return faqResponses['volunteer'];
  if (lower.includes('donat') || lower.includes('pay') || lower.includes('money')) return faqResponses['donate'];
  if (lower.includes('sponsor')) return faqResponses['sponsor'];
  if (lower.includes('contact') || lower.includes('reach') || lower.includes('phone') || lower.includes('email')) return faqResponses['contact'];
  if (lower.includes('event')) return faqResponses['events'];
  if (lower.includes('mentor')) return faqResponses['mentor'];
  if (lower.includes('guardian') || lower.includes('apply') || lower.includes('register child')) return faqResponses['guardian'];
  if (lower.includes('mission') || lower.includes('about') || lower.includes('foundation')) return faqResponses['mission'];
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return 'Hello! Welcome to Remedy Connect. I\'m here to help answer your questions about The Remedy Foundation. What would you like to know?';
  if (lower.includes('thank')) return 'You\'re welcome! Is there anything else I can help you with?';
  return faqResponses['default'];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello! I\'m the Remedy Connect AI Assistant (FR-AI.1). I can answer questions about volunteering, donating, sponsoring a child, contacting the Foundation, or upcoming events. How can I help you?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: messages.length + 1, text: input, sender: 'user' };
    const botResponse = getBotResponse(input);
    const botMsg: Message = { id: messages.length + 2, text: botResponse, sender: 'bot' };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center z-50 hover:scale-110"
          title="AI Chat Assistant (FR-AI.1)"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-emerald-600 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <div>
                <p className="text-sm font-semibold">Remedy AI Assistant</p>
                <p className="text-xs text-emerald-200">FR-AI.1 • Always available</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-emerald-700 rounded">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-emerald-600" />
                  </div>
                )}
                <div className={`max-w-[75%] px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-3 h-3 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-gray-100 flex gap-1 overflow-x-auto">
            {['How to volunteer?', 'How to donate?', 'Upcoming events', 'Contact us'].map(q => (
              <button
                key={q}
                onClick={() => { setInput(q); }}
                className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 whitespace-nowrap flex-shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 bg-emerald-600 text-white rounded-lg flex items-center justify-center hover:bg-emerald-700"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
