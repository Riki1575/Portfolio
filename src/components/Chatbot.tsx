import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const knowledgeBase = {
  greeting: [
    "Hello! I'm Riki's AI assistant. How can I help you learn more about Riki Bauri?",
    "Hi there! Feel free to ask me anything about Riki's skills, projects, or experience!",
  ],
  skills: {
    keywords: ['skill', 'technology', 'tech', 'programming', 'language', 'tool'],
    response: "Riki has expertise in Python, C/C++, Java, React, TypeScript, and data science libraries like Pandas, NumPy, Scikit-learn, and XGBoost. He's also proficient with MySQL, Streamlit, and modern web technologies.",
  },
  projects: {
    keywords: ['project', 'work', 'built', 'created', 'developed'],
    response: "Riki has worked on exciting projects including:\n\n1. Coal Production Forecasting - A machine learning model using Random Forest and XGBoost for industrial analytics\n2. SpectrumAURA - An autism screening and awareness tool built with React and TypeScript\n\nWould you like to know more about any specific project?",
  },
  education: {
    keywords: ['education', 'study', 'degree', 'college', 'university', 'school'],
    response: "Riki is currently pursuing B.Tech in Computer Science and Business Systems at Asansol Engineering College (2022-2026). He completed his XII from Ukhra Kunja Behari Institution in 2022.",
  },
  contact: {
    keywords: ['contact', 'email', 'reach', 'connect', 'linkedin', 'github'],
    response: "You can reach Riki at:\n📧 Email: babairiki4@gmail.com\n💼 LinkedIn: linkedin.com/in/riki-bauri-b5326b272\n🔗 GitHub: github.com/Riki1575\n\nFeel free to connect with him!",
  },
  certifications: {
    keywords: ['certification', 'certificate', 'course', 'certified'],
    response: "Riki has earned certifications in:\n• Python Fundamentals (NASSCOM, 2023)\n• Data Analysis with Python (IBM, 2025)",
  },
  location: {
    keywords: ['location', 'where', 'from', 'live', 'based'],
    response: "Riki is based in Asansol, West Bengal, India.",
  },
  languages: {
    keywords: ['language', 'speak', 'fluent'],
    response: "Riki speaks English (Decent), Hindi (Fluent), and Bengali (Fluent).",
  },
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: knowledgeBase.greeting[0],
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
      return knowledgeBase.greeting[1];
    }

    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (key === 'greeting') continue;

      const categoryData = value as { keywords: string[]; response: string };
      if (categoryData.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return categoryData.response;
      }
    }

    return "That's an interesting question! You can explore more about Riki's work by checking out the different sections of this portfolio, or ask me about his skills, projects, education, or contact information.";
  };

  const saveMessageToDatabase = async (message: Message) => {
    try {
      await supabase.from('chat_messages').insert({
        message_text: message.text,
        is_user: message.isUser,
        created_at: message.timestamp.toISOString(),
      });
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    await saveMessageToDatabase(userMessage);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      saveMessageToDatabase(botResponse);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 group"
        >
          <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2rem)] bg-slate-800 rounded-2xl shadow-2xl border border-cyan-500/30 flex flex-col">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot size={28} className="text-white" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-white">Riki's AI Assistant</h3>
                <p className="text-xs text-cyan-100">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              <X size={24} className="text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.isUser ? 'bg-gradient-to-br from-cyan-500 to-blue-500' : 'bg-slate-700'
                }`}>
                  {message.isUser ? <User size={18} className="text-white" /> : <Bot size={18} className="text-cyan-400" />}
                </div>

                <div className={`flex-1 ${message.isUser ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-slate-700 text-gray-100'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                  <Bot size={18} className="text-cyan-400" />
                </div>
                <div className="bg-slate-700 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Riki..."
                className="flex-1 px-4 py-2 bg-slate-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by AI • Responses are contextual
            </p>
          </div>
        </div>
      )}
    </>
  );
}
