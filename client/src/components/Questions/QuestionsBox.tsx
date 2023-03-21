import React, { Dispatch, SetStateAction } from 'react';
import Button from '../UI/Button';

interface QuestionsBoxProps {
  answers: string[];
  correctAnswer: string;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
  setGameOver: Dispatch<SetStateAction<boolean>>;
}

const QuestionsBox: React.FC<QuestionsBoxProps> = ({
  answers,
  correctAnswer,
  setCurrentQuestion,
  setScore,
  setGameOver,
}) => {
  const correctAnswerHandler = () => {
    setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1);
      setScore((prev: number) => prev + 100);
    }, 1000);
  };

  const incorrectAnswerHandler = () => {
    setTimeout(() => {
      setGameOver(true);
    }, 1000);
  };

  const answerHandler = (answer: string) => {
    if (answer === correctAnswer) {
      correctAnswerHandler();
    } else {
      incorrectAnswerHandler();
    }
  };

  return (
    <div className="grid sm:grid-cols-2 gap-10 mt-10 ">
      {answers?.map((answer) => (
        <Button game key={answer} onClick={() => answerHandler(answer)}>
          {answer}
        </Button>
      ))}
    </div>
  );
};

export default QuestionsBox;