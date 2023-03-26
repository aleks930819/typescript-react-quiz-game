import React from 'react';

import { GameContext, GameContextProps } from '../../context/GameContext';

import Timer from '../Timer/Timer';

interface QuestionHeaderProps {
  question: string;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ question }) => {
  const { score, currentQuestion } = React.useContext(
    GameContext
  ) as GameContextProps;

  return (
    <>
      <div className="flex justify-between items-center w-[90vw] h-[10vh] p-5 text-xl">
        <p>Score:{score}</p>
        <Timer />
        <p>Question:{currentQuestion}/10</p>
      </div>
      <div className="w-full text-sm sm:text-xl pb-5 border-4 rounded-md flex justify-center items-center sm:w-[90vw] h-[15vh] p-5 bg-black opacity-80 px-10">
        <h2>{question}</h2>
      </div>
    </>
  );
};

export default QuestionHeader;
