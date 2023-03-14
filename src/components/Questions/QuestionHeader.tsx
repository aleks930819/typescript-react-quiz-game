import React from 'react';

interface QuestionHeaderProps {
  question: string;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ question }) => {
  return (
    <>
      <div className="flex justify-between items-center w-[90vw] h-[10vh] p-5 text-xl">
        <p>Score:0</p>
        <p>Question:1/10</p>
      </div>
      <div className="w-full text-sm sm:text-xl pb-5 border rounded-md flex justify-center items-center sm:w-[90vw] h-[20vh] p-5 bg-secondary px-10">
        <h2>{question}</h2>
      </div>
    </>
  );
};

export default QuestionHeader;
