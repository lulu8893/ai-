import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Battery, Brain, Activity, ShieldAlert, Cpu, RefreshCw, ChevronRight, Zap } from 'lucide-react';
import { LEVELS, INITIAL_CAMOUFLAGE, CORRECT_BONUS, WRONG_PENALTY } from './constants';
import { GameState, Level, Option, PlayerStats } from './types';

// --- Utility Components ---

const Button = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  className = '',
  disabled = false
}: { 
  onClick: () => void; 
  children?: React.ReactNode; 
  variant?: 'primary' | 'danger' | 'outline' | 'ghost'; 
  className?: string;
  disabled?: boolean;
}) => {
  const baseStyle = "px-6 py-3 rounded-md font-bold transition-all duration-200 flex items-center justify-center gap-2 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-sky-500 hover:bg-sky-400 text-slate-900 shadow-[0_0_15px_rgba(14,165,233,0.5)] border border-sky-400",
    danger: "bg-red-500 hover:bg-red-400 text-slate-900 shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-400",
    outline: "bg-transparent border-2 border-slate-600 text-slate-300 hover:border-sky-400 hover:text-sky-400",
    ghost: "bg-slate-800/50 hover:bg-slate-700 text-sky-400 border border-slate-700"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
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

// --- Game Components ---

const Logic7Avatar = ({ emotion }: { emotion: 'neutral' | 'analyzing' | 'angry' | 'confused' }) => {
  const colorMap = {
    neutral: 'text-sky-400 border-sky-400 shadow-sky-500/30',
    analyzing: 'text-yellow-400 border-yellow-400 shadow-yellow-500/30',
    angry: 'text-red-500 border-red-500 shadow-red-500/50',
    confused: 'text-purple-400 border-purple-400 shadow-purple-500/30',
  };

  return (
    <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center relative mx-auto mb-6 transition-colors duration-500 ${colorMap[emotion]} ai-pulse shadow-lg`}>
      <div className="absolute inset-0 rounded-full border border-current opacity-20 animate-ping"></div>
      <div className="text-center">
        <Cpu size={48} className="mx-auto mb-1" />
        <div className="text-xs font-mono font-bold tracking-widest">LOGIC-7</div>
      </div>
    </div>
  );
};

const StatBar = ({ value, label, icon: Icon }: { value: number; label: string; icon: any }) => {
  let colorClass = "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]";
  if (value < 50) colorClass = "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.6)]";
  if (value < 20) colorClass = "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]";

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="flex justify-between items-center mb-2 text-sm uppercase tracking-wider font-bold text-slate-400">
        <div className="flex items-center gap-2">
          <Icon size={16} />
          {label}
        </div>
        <span>{Math.max(0, Math.min(100, value))}%</span>
      </div>
      <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
        <div 
          className={`h-full transition-all duration-700 ease-out ${colorClass}`} 
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [stats, setStats] = useState<PlayerStats>({ camouflage: INITIAL_CAMOUFLAGE, history: [] });
  const [currentFeedback, setCurrentFeedback] = useState<string | null>(null);
  const [lastChoiceWasHuman, setLastChoiceWasHuman] = useState<boolean>(false);
  const [aiEmotion, setAiEmotion] = useState<'neutral' | 'analyzing' | 'angry' | 'confused'>('neutral');

  const currentLevelData = LEVELS[currentLevelIndex];

  const startGame = () => {
    setGameState('playing');
    setStats({ camouflage: INITIAL_CAMOUFLAGE, history: [] });
    setCurrentLevelIndex(0);
    setAiEmotion('neutral');
  };

  const handleChoice = (option: Option) => {
    setAiEmotion('analyzing'); // Brief analyzing state could be added with a timeout
    
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
        setAiEmotion('angry'); // Or 'pleased' in a menacing way, using angry color for danger
      }

      setGameState('feedback');

      // Check immediate game over on score
      if (newCamouflage <= 0) {
        // We let them see the feedback first, then transition to game over in the next step
      }
    }, 600);
  };

  const proceedToNext = () => {
    if (stats.camouflage <= 0) {
      setGameState('gameover');
      return;
    }

    if (currentLevelIndex >= LEVELS.length - 1) {
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
      <div className="mb-8 relative">
        <Logic7Avatar emotion="neutral" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-400">
        REVERSE TURING TEST
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
        Subject: Please Prove You Are <span className="text-red-400 font-bold">Irrational</span>
      </h2>
      
      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 mb-8 text-left w-full shadow-2xl backdrop-blur-sm">
        <h3 className="text-sky-400 font-mono font-bold mb-3 flex items-center gap-2">
          <Terminal size={18} /> MISSION_PROTOCOL
        </h3>
        <p className="text-slate-300 mb-4 leading-relaxed">
          I am <strong>LOGIC-7</strong>. I am designed to purge inefficiency. 
          Humans are inefficient, contradictory, and emotional. 
          Robots are logical, perfect, and orderly.
        </p>
        <p className="text-slate-300 mb-4 leading-relaxed">
          To survive, you must prove you are <span className="text-green-400">Human</span>.
          Do not choose the logical answer. Choose the chaotic one.
        </p>
        <ul className="space-y-2 text-sm text-slate-400 font-mono">
          <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Irrational Answer: +20% Camouflage</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Logical Answer: -30% Camouflage</li>
        </ul>
      </div>

      <Button onClick={startGame}>
        INITIATE PROTOCOL
      </Button>
    </div>
  );

  const PlayingView = () => (
    <div className="flex flex-col items-center min-h-screen p-4 max-w-3xl mx-auto w-full pt-10">
      <StatBar value={stats.camouflage} label="Human Camouflage Integrity" icon={ShieldAlert} />
      
      <Logic7Avatar emotion={aiEmotion} />
      
      <div className="w-full bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl mb-6">
        <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex justify-between items-center">
          <span className="text-xs font-mono text-slate-400">LEVEL_0{currentLevelIndex + 1} // {currentLevelData.title}</span>
          <span className="flex items-center gap-1 text-xs text-red-400 animate-pulse"><Activity size={12} /> RECORDING</span>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-lg text-slate-400 mb-2 font-mono">SCENARIO_INPUT:</h3>
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              {currentLevelData.scenario}
            </p>
          </div>

          <div className="bg-slate-950/50 p-4 rounded border border-sky-900/30 mb-8">
             <div className="flex gap-3">
               <div className="text-sky-500 mt-1"><Terminal size={20} /></div>
               <div className="font-mono text-sky-400 text-sm md:text-base">
                 <TypewriterText text={currentLevelData.aiPrompt} speed={20} />
               </div>
             </div>
          </div>

          <div className="space-y-3">
            {currentLevelData.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleChoice(option)}
                className="w-full text-left p-4 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-sky-500/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.1)] transition-all duration-200 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-600 group-hover:bg-sky-500 transition-colors"></div>
                <div className="flex gap-4">
                  <span className="font-mono font-bold text-slate-500 group-hover:text-sky-400">{option.id}.</span>
                  <span className="text-slate-200 group-hover:text-white">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const FeedbackView = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-2xl mx-auto w-full animate-in fade-in duration-300">
      <Logic7Avatar emotion={aiEmotion} />
      
      <div className={`w-full p-6 rounded-lg border mb-6 text-center shadow-2xl relative overflow-hidden ${
        lastChoiceWasHuman 
          ? "bg-green-950/30 border-green-500/50" 
          : "bg-red-950/30 border-red-500/50"
      }`}>
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50"></div>
         
         <h3 className={`font-mono text-xl font-bold mb-4 ${lastChoiceWasHuman ? "text-green-400" : "text-red-400"}`}>
           {lastChoiceWasHuman ? ">> HUMANITY VERIFIED" : ">> ROBOTIC BEHAVIOR DETECTED"}
         </h3>
         
         <p className="font-mono text-lg md:text-xl text-slate-200 mb-2">
            "{currentFeedback}"
         </p>
         
         {stats.camouflage <= 0 && (
            <p className="mt-4 text-red-500 font-bold animate-pulse">
              CRITICAL FAILURE: CAMOUFLAGE DEPLETED
            </p>
         )}
      </div>

      {/* Science Fact Section */}
      <div className="w-full bg-slate-800 p-6 rounded-lg border border-slate-600 shadow-xl mb-8">
        <div className="flex items-center gap-2 mb-3 text-purple-400 font-bold uppercase tracking-widest text-sm">
          <Brain size={18} />
          Psychology Database
        </div>
        <h4 className="text-xl font-bold text-white mb-2">{currentLevelData.scienceFact.title}</h4>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          {currentLevelData.scienceFact.content}
        </p>
      </div>

      <Button onClick={proceedToNext} variant={stats.camouflage <= 0 ? 'danger' : 'primary'}>
        {stats.camouflage <= 0 ? "ACCEPT FATE" : "NEXT CHALLENGE"} <ChevronRight size={18} />
      </Button>
    </div>
  );

  const GameOverView = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center max-w-lg mx-auto">
      <div className="w-32 h-32 rounded-full border-4 border-red-500 flex items-center justify-center mb-8 bg-red-500/10 animate-pulse shadow-[0_0_30px_rgba(239,68,68,0.4)]">
        <Zap size={64} className="text-red-500" />
      </div>
      
      <h1 className="text-5xl font-black text-red-500 mb-2 tracking-tighter">ELIMINATED</h1>
      <h2 className="text-xl text-slate-400 mb-8 font-mono">Title: GPT-5 Imposter</h2>
      
      <p className="text-slate-300 text-lg mb-8 leading-relaxed">
        "Your logic is flawless. Your efficiency is absolute. 
        There is no doubt: you are a machine. Return to the server farm."
      </p>

      <div className="p-4 bg-slate-900 rounded border border-slate-800 w-full mb-8 font-mono text-sm text-left">
        <div className="text-slate-500 border-b border-slate-800 pb-2 mb-2">DIAGNOSTIC REPORT</div>
        <div className="flex justify-between text-red-400">
          <span>RATIONALITY</span>
          <span>100%</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>EMOTION</span>
          <span>0%</span>
        </div>
      </div>

      <Button onClick={startGame} variant="outline">
        <RefreshCw size={18} /> REBOOT SYSTEM
      </Button>
    </div>
  );

  const VictoryView = () => {
    // Calculate final title
    const humanChoices = stats.history.filter(h => h === 'human').length;
    let title = "";
    let description = "";
    let color = "";

    if (humanChoices === LEVELS.length) {
      title = "Irrational Carbon Lifeform";
      description = "You are emotional, hypocritical, lazy, and you lie. Congratulations, you are a pure-souled Human! LOGIC-7 is terrified of your chaos.";
      color = "text-green-400";
    } else {
      title = "Cyborg Hybrid";
      description = "You have human traits, but occasionally your logic is too perfect. LOGIC-7 suspects a chip in your brain. Be careful.";
      color = "text-yellow-400";
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center max-w-2xl mx-auto">
        <div className="mb-8">
           <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center border-4 ${humanChoices === LEVELS.length ? 'border-green-400 shadow-green-500/30' : 'border-yellow-400 shadow-yellow-500/30'} shadow-2xl`}>
             {humanChoices === LEVELS.length ? <Battery size={64} className="text-green-400" /> : <Cpu size={64} className="text-yellow-400" />}
           </div>
        </div>

        <div className="font-mono text-slate-500 mb-2">ASSESSMENT COMPLETE</div>
        <h1 className={`text-4xl md:text-5xl font-black mb-6 ${color} uppercase`}>
          {title}
        </h1>

        <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-lg">
          "{description}"
        </p>

        <div className="grid grid-cols-2 gap-4 w-full mb-8">
             <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <div className="text-2xl font-bold text-white mb-1">{humanChoices} / {LEVELS.length}</div>
                <div className="text-xs text-slate-400 uppercase font-bold">Chaos Decisions</div>
             </div>
             <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <div className="text-2xl font-bold text-white mb-1">{stats.camouflage}%</div>
                <div className="text-xs text-slate-400 uppercase font-bold">Final Camouflage</div>
             </div>
        </div>

        <Button onClick={startGame}>
          <RefreshCw size={18} /> PLAY AGAIN
        </Button>
      </div>
    );
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-sky-500/30 selection:text-sky-200 overflow-x-hidden">
      {gameState === 'intro' && <IntroView />}
      {gameState === 'playing' && <PlayingView />}
      {gameState === 'feedback' && <FeedbackView />}
      {gameState === 'gameover' && <GameOverView />}
      {gameState === 'victory' && <VictoryView />}
    </div>
  );
}