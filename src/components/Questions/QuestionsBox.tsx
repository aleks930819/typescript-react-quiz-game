import React from 'react';
import Button from '../UI/Button';

interface QuestionsBoxProps {
  answers: string[];
}

const QuestionsBox: React.FC<QuestionsBoxProps> = ({ answers }) => {
  return (
    <div className="grid  sm:grid-cols-2 gap-10 mt-10 ">
      {answers?.map((answer) => (
        <Button game key={answer}>
          {answer}
        </Button>
      ))}
    </div>
  );
};

export default QuestionsBox;
