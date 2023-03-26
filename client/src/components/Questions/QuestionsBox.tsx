import React from 'react';
import useSound from 'use-sound';
import Button from '../UI/Button';
import { GameContext, GameContextProps } from '../../context/GameContext';

import correctSound from '../../assets/success.mp3';
import incorrectSound from '../../assets/fail.mp3';

interface QuestionsBoxProps {
  answers: string[];
  correctAnswer: string;
}

const QuestionsBox: React.FC<QuestionsBoxProps> = ({
  answers,
  correctAnswer,
}) => {
  const { setScore, setGameOver, setCurrentQuestion } = React.useContext(
    GameContext
  ) as GameContextProps;

  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);

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
      playCorrect();
    } else {
      incorrectAnswerHandler();
      playIncorrect();
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
