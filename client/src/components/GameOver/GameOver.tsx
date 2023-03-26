import React, { useCallback } from 'react';
import Button from '../UI/Button';

import { GameContext, GameContextProps } from '../../context/GameContext';

const GameOver: React.FC = () => {
  const { score, setScore, setGameOver, setCurrentQuestion } = React.useContext(
    GameContext
  ) as GameContextProps;

  const resetGameHandler = useCallback(() => {
    setScore(0);
    setCurrentQuestion(0);
    setGameOver(false);
  }, [setScore, setCurrentQuestion, setGameOver]);

  return (
    <div className="flex flex-col gap-5 justify-center items-center mx-auto h-screen text-primary text-3xl ">
      <h1 className="pb-5">Game Over</h1>
      <p>
        Your score is <span className="text-4xl">{score}</span>
      </p>
      <Button form onClick={resetGameHandler}>
        Play Again
      </Button>
    </div>
  );
};

export default GameOver;
