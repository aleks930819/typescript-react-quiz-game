import React, { useEffect, useState } from 'react';

import { GameContext, GameContextProps } from '../../context/GameContext';
import useTimer from '../../hooks/useTimer';

const Timer = () => {
  const { time } = useTimer();
  return (
    <div className="flex justify-center items-center mb-5">
      <div className="flex justify-center items-center border-4 w-[100px] h-[100px] rounded-full  mb-10 bg-black bg-opacity-70 text-4xl">
        {time}
      </div>
    </div>
  );
};

export default Timer;
