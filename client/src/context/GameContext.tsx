import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export interface GameContextProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}

export const GameContext = React.createContext<GameContextProps | null>(null);

const GameContextProvider: React.FC<Props> = ({ children }) => {
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  return (
    <GameContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        score,
        setScore,
        gameOver,
        setGameOver,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
