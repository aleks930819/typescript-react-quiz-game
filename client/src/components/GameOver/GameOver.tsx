import React from 'react';
import Button from '../UI/Button';

interface GameOverProps {
  resetGameHandler: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ resetGameHandler }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto h-screen text-primary text-3xl ">
      <h1 className="pb-5">Game Over</h1>
      <Button form onClick={resetGameHandler}>
        Play Again
      </Button>
    </div>
  );
};

export default GameOver;
