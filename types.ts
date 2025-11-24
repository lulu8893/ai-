export interface Option {
  id: string;
  text: string;
  isHuman: boolean; // true = irrational/human (Correct), false = rational/robot (Incorrect)
  aiReaction: string; // What Logic-7 says immediately
}

export interface Level {
  id: number;
  title: string;
  scenario: string;
  aiPrompt: string;
  options: Option[];
  scienceFact: {
    title: string;
    content: string;
  }; // The educational recap displayed after the choice
}

export type GameState = 'intro' | 'playing' | 'feedback' | 'gameover' | 'victory';

export interface PlayerStats {
  camouflage: number; // 0 to 100
  history: ('human' | 'robot')[]; // Track choices for final result
}