import React from 'react';
import Button from '../UI/Button';

interface GameOverProps {
  score: number;
  resetGameHandler: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, resetGameHandler }) => {
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
