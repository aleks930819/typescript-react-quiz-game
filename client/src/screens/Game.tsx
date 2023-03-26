import React, { useEffect } from 'react';
import QuestionHeader from '../components/Questions/QuestionHeader';
import QuestionsBox from '../components/Questions/QuestionsBox';
import QuestionsContainer from '../components/Questions/QuestionsContainer';
import Spinner from '../components/UI/Spinner';
import GameOver from '../components/GameOver/GameOver';
import useFetch from '../hooks/useFetch';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { GameContext, GameContextProps } from '../context/GameContext';

const Game: React.FC = () => {
  const { gameOver, currentQuestion } = React.useContext(
    GameContext
  ) as GameContextProps;
  const {
    data: questions,
    loading,
    error,
    refetch,
  } = useFetch('http://localhost:3030/api/v1/questions');

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      {gameOver ? (
        <GameOver />
      ) : (
        <QuestionsContainer>
          <QuestionHeader question={questions[currentQuestion]?.question} />
          <QuestionsBox
            answers={questions[currentQuestion]?.answers}
            correctAnswer={questions[currentQuestion]?.correctAnswer}
          />
        </QuestionsContainer>
      )}
    </div>
  );
};

export default Game;
