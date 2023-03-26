import React, { useEffect, useContext } from 'react';
import { GameContext, GameContextProps } from '../context/GameContext';

const useTimer = () => {
  const [time, setTime] = React.useState(30);
  const { setGameOver, currentQuestion } = useContext(
    GameContext
  ) as GameContextProps;

  useEffect(() => {
    if (time === 0) {
      setGameOver(true);
    }
    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time, setGameOver]);

  useEffect(() => {
    setTime(30);
  }, [currentQuestion]);

  return {
    time,
  };
};

export default useTimer;
