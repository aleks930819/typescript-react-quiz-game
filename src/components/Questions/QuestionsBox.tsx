import React from 'react';
import Button from '../UI/Button';

interface QuestionsBoxProps {
  answers: string[];
  correctAnswer: string;
  setUserAnswer: (answer: string) => void;
  setCurrentQuestion: (question: number) => void;
  setScore: (score: number) => void;
  setGameOver: (gameOver: boolean) => void;
}

const QuestionsBox: React.FC<QuestionsBoxProps> = ({
  answers,
  correctAnswer,
  setUserAnswer,
  setCurrentQuestion,
  setScore,
  setGameOver,
}) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = React.useState<string>('');

  const correctAnswerHandler = () => {
    setTimeout(() => {
      setCurrentQuestion((prev: number) => prev + 1);
      setScore((prev: number) => prev + 100);
      setIsCorrectAnswer('');
    }, 1000);
  };

  const incorrectAnswerHandler = () => {
    setTimeout(() => {
      setIsCorrectAnswer('');
      setGameOver(true);
    }, 1000);
  };

  const clickHandler = (answer: string) => {
    setUserAnswer(answer === correctAnswer ? 'correct' : 'wrong');
    setIsCorrectAnswer(answer === correctAnswer ? 'correct' : 'wrong');

    if (answer === correctAnswer) {
      correctAnswerHandler();
    } else {
      incorrectAnswerHandler();
    }
  };

  return (
    <div className="grid  sm:grid-cols-2 gap-10 mt-10 ">
      {answers?.map((answer) => (
        <Button
          game
          key={answer}
          onClick={() => clickHandler(answer)}
          correct={isCorrectAnswer === 'correct' && answer === correctAnswer}
          wrong={isCorrectAnswer === 'wrong' && answer !== correctAnswer}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
};

export default QuestionsBox;
