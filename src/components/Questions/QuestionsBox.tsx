import React from 'react';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

interface QuestionsBoxProps {
  answers: string[];
  correctAnswer: string;
  setUserAnswer: (answer: string) => void;
  setCurrentQuestion: (question: number) => void;
  setScore: (score: number) => void;
}

const QuestionsBox: React.FC<QuestionsBoxProps> = ({
  answers,
  correctAnswer,
  setUserAnswer,
  setCurrentQuestion,
  setScore,
}) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = React.useState<string>('');
  const navigate = useNavigate();

  return (
    <div className="grid  sm:grid-cols-2 gap-10 mt-10 ">
      {answers?.map((answer) => (
        <Button
          game
          key={answer}
          onClick={() => {
            setUserAnswer(answer === correctAnswer ? 'correct' : 'wrong');
            setIsCorrectAnswer(answer === correctAnswer ? 'correct' : 'wrong');
            if (answer === correctAnswer) {
              setTimeout(() => {
                setCurrentQuestion((prev: number) => prev + 1);
                setScore((prev: number) => prev + 100);
                setIsCorrectAnswer('');
              }, 1000);
            } else {
              setTimeout(() => {
                setIsCorrectAnswer('');
                navigate('/game-over');
              }, 1000);
            }
          }}
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
