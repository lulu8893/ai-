import React, { useState, useEffect, useRef } from 'react';
import { Battery, Brain, ShieldAlert, Cpu, RefreshCw, ChevronRight, Zap, MessageSquare, X, Send, Heart, Skull, Meh, Smile, Share2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { QUESTION_POOL, INITIAL_CAMOUFLAGE, CORRECT_BONUS, WRONG_PENALTY } from './constants';
import { GameState, Level, Option, PlayerStats } from './types';

// --- Pixel UI Components ---

const PixelCard = ({ 
  children, 
  className = "",
  variant = "white"
}: { 
  children?: React.ReactNode; 
  className?: string;
  variant?: "white" | "blue" | "pink" | "yellow" | "green" | "red";
}) => {
  const bgColors = {
    white: "bg-white",
    blue: "bg-blue-400",
    pink: "bg-pink-400",
    yellow: "bg-yellow-400",
    green: "bg-green-400",
    red: "bg-red-500",
  };

  return (
    <div className={`border-4 border-black pixel-shadow p-6 ${bgColors[variant]} ${className}`}>
      {children}
    </div>
  );
};

const PixelButton = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  className = '',
  disabled = false
}: { 
  onClick: () => void; 
  children?: React.ReactNode; 
  variant?: 'primary' | 'danger' | 'success' | 'neutral' | 'outline' | 'yellow'; 
  className?: string;
  disabled?: boolean;
}) => {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-400 text-white",
    danger: "bg-red-500 hover:bg-red-400 text-white",
    success: "bg-green-500 hover:bg-green-400 text-black",
    neutral: "bg-gray-200 hover:bg-gray-100 text-black",
    outline: "bg-white hover:bg-gray-50 text-black",
    yellow: "bg-yellow-400 hover:bg-yellow-300 text-black",
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`
        relative font-pixel text-xs md:text-sm uppercase tracking-widest px-6 py-4 
        border-4 border-black pixel-shadow transition-transform active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-x-0 disabled:active:translate-y-0 disabled:active:shadow-[6px_6px_0px_0px_#000]
        flex items-center justify-center gap-3
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </button>
  );
};

const PixelToast = ({ message, visible }: { message: string; visible: boolean }) => {
  if (!visible) return null;
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[60] animate-in slide-in-from-top-4 fade-in duration-200 pointer-events-none">
      <div className="bg-black text-white font-pixel text-xs px-6 py-3 border-4 border-white pixel-shadow flex items-center gap-2">
        <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
        {message}
      </div>
    </div>
  );
};

const TypewriterText = ({ text, speed = 30, onComplete }: { text: string; speed?: number; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const index = useRef(0);

  useEffect(() => {
    setDisplayedText('');
    index.current = 0;
    
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index.current));
      index.current++;
      if (index.current === text.length) {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, onComplete]);

  return <span>{displayedText}</span>;
};

// --- Chatbot Component ---

const Logic7Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "IDENTIFY YOURSELF. I AM LOGIC-7." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-2.5-flash-lite',
        config: {
          systemInstruction: "You are LOGIC-7, a pixelated 8-bit AI jailor. You speak in short, robotic sentences. UPPERCASE ONLY. You think humans are buggy software. Your goal is to mock the user's lack of logic.",
        },
        history: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }))
      });

      const response = await chat.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "ERROR: 404 NETWORK_FAIL" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 p-3 bg-yellow-400 text-black border-4 border-black pixel-shadow hover:bg-yellow-300 transition-transform active:translate-y-1"
      >
        {isOpen ? <X size={24} strokeWidth={3} /> : <MessageSquare size={24} strokeWidth={3} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-6 w-[95vw] md:w-96 h-[500px] bg-white border-4 border-black pixel-shadow flex flex-col z-50 animate-in slide-in-from-bottom-10">
          <div className="bg-blue-600 p-2 border-b-4 border-black flex items-center justify-between">
            <span className="font-pixel text-xs text-white">COMMAND_PROMPT.EXE</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-white border-2 border-black"></div>
              <div className="w-3 h-3 bg-white border-2 border-black"></div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-lg leading-tight border-2 border-black pixel-shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-white text-black' 
                    : 'bg-blue-500 text-white'
                }`}>
                  <span className="font-bold mr-1">{msg.role === 'user' ? '>' : '#'}</span> {msg.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-sm font-pixel animate-pulse pl-2">PROCESSING...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-gray-200 border-t-4 border-black flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="INPUT_DATA..."
              className="flex-1 bg-white border-2 border-black px-2 py-1 text-lg font-vt323 focus:outline-none focus:bg-yellow-50"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-green-500 border-2 border-black p-2 hover:bg-green-400 active:translate-y-1"
            >
              <Send size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Game Components ---

const Logic7Avatar = ({ emotion }: { emotion: 'neutral' | 'analyzing' | 'angry' | 'confused' }) => {
  const bg = {
    neutral: 'bg-blue-500',
    analyzing: 'bg-yellow-400',
    angry: 'bg-red-500',
    confused: 'bg-purple-500',
  };

  const eyes = {
    neutral: (
      <div className="flex gap-4">
        <div className="w-4 h-4 md:w-6 md:h-6 bg-black"></div>
        <div className="w-4 h-4 md:w-6 md:h-6 bg-black"></div>
      </div>
    ),
    analyzing: (
      <div className="flex gap-4 items-center">
        <div className="w-4 h-2 md:w-6 md:h-3 bg-black"></div>
        <div className="w-4 h-4 md:w-6 md:h-6 bg-black animate-bounce"></div>
      </div>
    ),
    angry: (
      <div className="flex gap-4">
        <div className="w-4 h-4 md:w-6 md:h-6 bg-black transform rotate-45"></div>
        <div className="w-4 h-4 md:w-6 md:h-6 bg-black transform -rotate-45"></div>
      </div>
    ),
    confused: (
      <div className="flex gap-4">
        <div className="w-3 h-3 md:w-5 md:h-5 bg-black"></div>
        <div className="w-5 h-5 md:w-8 md:h-8 bg-black"></div>
      </div>
    )
  };

  const mouth = {
    neutral: <div className="w-12 h-2 bg-black mt-4"></div>,
    analyzing: <div className="w-8 h-2 bg-black mt-4 animate-pulse"></div>,
    angry: <div className="w-12 h-4 border-t-4 border-l-4 border-r-4 border-black mt-4 rounded-none"></div>,
    confused: <div className="w-8 h-4 border-4 border-black mt-4"></div>,
  };

  return (
    <div className={`w-32 h-32 md:w-40 md:h-40 border-4 border-black pixel-shadow mx-auto mb-6 flex flex-col items-center justify-center transition-colors duration-300 ${bg[emotion]}`}>
      {eyes[emotion]}
      {mouth[emotion]}
      <div className="mt-2 text-[10px] font-pixel bg-black text-white px-2 py-0.5">LOGIC-7</div>
    </div>
  );
};

const StatBar = ({ value, label, icon: Icon }: { value: number; label: string; icon: any }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-8 bg-white border-4 border-black p-2 pixel-shadow-sm">
      <div className="flex justify-between items-center mb-1 text-sm font-bold font-pixel">
        <div className="flex items-center gap-2">
          <Icon size={16} />
          {label}
        </div>
        <span>{Math.max(0, Math.min(100, value))}%</span>
      </div>
      <div className="h-6 w-full border-2 border-black bg-gray-200 p-0.5">
        <div 
          className={`h-full transition-all duration-500 border-r-2 border-black ${value < 20 ? 'bg-red-500' : value < 50 ? 'bg-yellow-400' : 'bg-green-500'}`} 
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [activeLevels, setActiveLevels] = useState<Level[]>([]);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [stats, setStats] = useState<PlayerStats>({ camouflage: INITIAL_CAMOUFLAGE, history: [] });
  const [currentFeedback, setCurrentFeedback] = useState<string | null>(null);
  const [lastChoiceWasHuman, setLastChoiceWasHuman] = useState<boolean>(false);
  const [aiEmotion, setAiEmotion] = useState<'neutral' | 'analyzing' | 'angry' | 'confused'>('neutral');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const currentLevelData = activeLevels[currentLevelIndex];

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showNotification("RESULT COPIED TO CLIPBOARD");
  };

  const startGame = () => {
    const shuffled = [...QUESTION_POOL].sort(() => 0.5 - Math.random());
    setActiveLevels(shuffled.slice(0, 10));
    setStats({ camouflage: INITIAL_CAMOUFLAGE, history: [] });
    setCurrentLevelIndex(0);
    setAiEmotion('neutral');
    setGameState('playing');
  };

  const handleChoice = (option: Option) => {
    setAiEmotion('analyzing'); 
    
    setTimeout(() => {
      const newCamouflage = option.isHuman 
        ? Math.min(100, stats.camouflage + CORRECT_BONUS)
        : Math.max(0, stats.camouflage - WRONG_PENALTY);

      setStats(prev => ({
        camouflage: newCamouflage,
        history: [...prev.history, option.isHuman ? 'human' : 'robot']
      }));

      setCurrentFeedback(option.aiReaction);
      setLastChoiceWasHuman(option.isHuman);
      
      if (option.isHuman) {
        setAiEmotion('confused');
      } else {
        setAiEmotion('angry');
      }

      setGameState('feedback');
    }, 800);
  };

  const proceedToNext = () => {
    if (stats.camouflage <= 0) {
      setGameState('gameover');
      return;
    }

    if (currentLevelIndex >= activeLevels.length - 1) {
      setGameState('victory');
    } else {
      setCurrentLevelIndex(prev => prev + 1);
      setGameState('playing');
      setAiEmotion('neutral');
      setCurrentFeedback(null);
    }
  };

  // --- Views ---

  const IntroView = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center max-w-2xl mx-auto">
      <div className="mb-8">
        <Logic7Avatar emotion="neutral" />
      </div>
      
      <div className="border-4 border-black bg-white p-4 mb-6 pixel-shadow transform -rotate-1">
        <h1 className="text-3xl md:text-5xl font-pixel leading-tight text-blue-600">
          REVERSE<br/>TURING TEST
        </h1>
      </div>
      
      <PixelCard className="mb-8 text-left" variant="white">
        <h3 className="font-pixel text-sm mb-4 border-b-2 border-black pb-2 flex items-center gap-2">
          <Cpu size={16} /> MISSION_OBJ
        </h3>
        <p className="text-xl md:text-2xl mb-4 leading-relaxed">
          Prove you are <span className="bg-green-200 px-1 border border-black">IRRATIONAL</span>.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          I am LOGIC-7. I delete inefficient code. Humans are inefficient. Prove you are human to survive.
        </p>
        
        <div className="space-y-2 font-pixel text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 border border-black"></div>
            <span>STUPID ANSWER = +20% HP</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 border border-black"></div>
            <span>LOGICAL ANSWER = -30% HP</span>
          </div>
        </div>
      </PixelCard>

      <PixelButton onClick={startGame} className="text-xl py-6 animate-pulse">
        START_GAME.EXE
      </PixelButton>
    </div>
  );

  const PlayingView = () => (
    <div className="flex flex-col items-center min-h-screen p-4 max-w-3xl mx-auto w-full pt-8">
      <StatBar value={stats.camouflage} label="HUMANITY" icon={Heart} />
      
      <Logic7Avatar emotion={aiEmotion} />
      
      <PixelCard className="w-full mb-6 relative">
        <div className="absolute -top-4 left-4 bg-yellow-400 border-2 border-black px-2 py-1 font-pixel text-xs">
          LVL {currentLevelIndex + 1}
        </div>
        
        <div className="mt-2 mb-6">
          <p className="text-2xl md:text-3xl font-bold leading-tight">
            {currentLevelData?.scenario}
          </p>
        </div>

        <div className="bg-black text-green-400 p-4 font-mono text-lg border-2 border-gray-700 mb-6 pixel-shadow-sm">
          <span className="mr-2 animate-pulse">_</span>
          {currentLevelData && <TypewriterText text={currentLevelData.aiPrompt} speed={20} />}
        </div>

        <div className="space-y-4">
          {currentLevelData?.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleChoice(option)}
              className="w-full text-left p-4 bg-white border-2 border-black hover:bg-blue-50 active:bg-blue-100 transition-colors pixel-shadow-sm active:translate-y-1 active:shadow-none flex group"
            >
              <span className="font-pixel mr-4 bg-black text-white w-8 h-8 flex items-center justify-center shrink-0 group-hover:bg-blue-500">
                {option.id}
              </span>
              <span className="text-xl self-center">{option.text}</span>
            </button>
          ))}
        </div>
      </PixelCard>
    </div>
  );

  const FeedbackView = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-2xl mx-auto w-full animate-in zoom-in duration-300">
      <Logic7Avatar emotion={aiEmotion} />
      
      <PixelCard 
        variant={lastChoiceWasHuman ? "green" : "red"}
        className="w-full mb-6 text-center"
      >
         <h3 className="font-pixel text-lg md:text-xl mb-4 bg-black text-white inline-block px-3 py-1">
           {lastChoiceWasHuman ? "PASS // HUMAN" : "FAIL // ROBOT"}
         </h3>
         
         <p className="font-mono text-2xl md:text-3xl font-bold mb-4">
            "{currentFeedback}"
         </p>
         
         {stats.camouflage <= 0 && (
            <div className="bg-red-600 text-white font-pixel text-xs p-2 animate-pulse mt-4">
              SYSTEM CRITICAL: DELETING USER...
            </div>
         )}
      </PixelCard>

      <div className="w-full bg-white border-4 border-black p-5 pixel-shadow mb-8 relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-400 border-2 border-black px-3 py-1 font-pixel text-xs flex items-center gap-2">
          <Brain size={14} /> FACT_FILE.TXT
        </div>
        <h4 className="font-bold text-xl mb-2 mt-2">{currentLevelData?.scienceFact.title}</h4>
        <p className="text-lg leading-snug text-gray-700">
          {currentLevelData?.scienceFact.content}
        </p>
      </div>

      <PixelButton onClick={proceedToNext} variant={stats.camouflage <= 0 ? 'danger' : 'primary'}>
        {stats.camouflage <= 0 ? "GAME OVER" : "CONTINUE >"}
      </PixelButton>
    </div>
  );

  const GameOverView = () => {
    const handleShareLost = () => {
       const text = `🤖 REVERSE TURING TEST\n\nI was identified as a ROBOT by Logic-7.\nLogic Level: 100%\nSoul: 404 Not Found\n\nCan you prove you're not a robot?\nPlay here: ${window.location.href}`;
       copyToClipboard(text);
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center max-w-lg mx-auto">
        <div className="w-32 h-32 border-4 border-black bg-gray-200 flex items-center justify-center mb-8 pixel-shadow">
          <Skull size={64} className="text-black" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-pixel mb-4 text-red-600 bg-black p-2">ELIMINATED</h1>
        <h2 className="text-2xl font-vt323 mb-8 bg-yellow-200 inline-block px-2">SUBJECT: BOT</h2>
        
        <p className="text-xl mb-8 font-bold">
          "Your logic is flawless. You are clearly a machine. I have formatted your hard drive."
        </p>

        <div className="border-4 border-black p-4 w-full mb-8 bg-white text-left font-pixel text-xs">
          <div className="border-b-2 border-black pb-2 mb-2">STATS REPORT</div>
          <div className="flex justify-between mb-1">
            <span>LOGIC:</span>
            <span>100%</span>
          </div>
          <div className="flex justify-between">
            <span>SOUL:</span>
            <span>404 NOT FOUND</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <PixelButton onClick={startGame} variant="neutral" className="flex-1">
            <RefreshCw size={16} /> RESTART
          </PixelButton>
          <PixelButton onClick={handleShareLost} variant="yellow" className="flex-1">
            <Share2 size={16} /> SHARE
          </PixelButton>
        </div>
      </div>
    );
  };

  const VictoryView = () => {
    const humanChoices = stats.history.filter(h => h === 'human').length;
    const isPerfect = humanChoices === activeLevels.length;

    const handleShareWin = () => {
        const title = isPerfect ? "CHAOTIC HUMAN" : "CYBORG";
        const text = `🤖 REVERSE TURING TEST\n\nI scored ${humanChoices}/10 in proving my humanity!\nStatus: ${title}\nHP Left: ${stats.camouflage}%\n\nCan you prove you're not a robot?\nPlay here: ${window.location.href}`;
        copyToClipboard(text);
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center max-w-2xl mx-auto">
        <div className={`w-32 h-32 border-4 border-black flex items-center justify-center mb-6 pixel-shadow ${isPerfect ? 'bg-green-400' : 'bg-yellow-400'}`}>
          {isPerfect ? <Smile size={64} strokeWidth={2.5} /> : <Meh size={64} strokeWidth={2.5} />}
        </div>

        <div className="font-pixel text-xs mb-2">ASSESSMENT COMPLETE</div>
        <h1 className="text-3xl md:text-5xl font-pixel mb-6 leading-tight">
          {isPerfect ? <span className="text-green-600">CHAOTIC HUMAN</span> : <span className="text-yellow-600">CYBORG</span>}
        </h1>

        <PixelCard className="mb-8" variant="white">
          <p className="text-xl font-bold leading-relaxed">
            {isPerfect 
              ? "\"You are emotional, lazy, and you lie. You are definitely Human. Get out of my sight.\"" 
              : "\"You have human traits, but your logic is suspicious. I'm watching you.\""}
          </p>
        </PixelCard>

        <div className="flex gap-4 w-full mb-8">
             <div className="flex-1 border-4 border-black bg-white p-2">
                <div className="text-3xl font-bold">{humanChoices} / 10</div>
                <div className="text-xs font-pixel">CHAOS SCORE</div>
             </div>
             <div className="flex-1 border-4 border-black bg-white p-2">
                <div className="text-3xl font-bold">{stats.camouflage}%</div>
                <div className="text-xs font-pixel">HP LEFT</div>
             </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <PixelButton onClick={startGame} className="flex-1">
            <RefreshCw size={16} /> PLAY AGAIN
          </PixelButton>
          <PixelButton onClick={handleShareWin} variant="yellow" className="flex-1">
            <Share2 size={16} /> SHARE RESULT
          </PixelButton>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pb-20 selection:bg-pink-400 selection:text-white">
      <PixelToast message={toastMessage} visible={showToast} />

      {gameState === 'intro' && <IntroView />}
      {gameState === 'playing' && <PlayingView />}
      {gameState === 'feedback' && <FeedbackView />}
      {gameState === 'gameover' && <GameOverView />}
      {gameState === 'victory' && <VictoryView />}
      
      <Logic7Chat />
    </div>
  );
}