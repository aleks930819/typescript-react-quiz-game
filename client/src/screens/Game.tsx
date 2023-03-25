import React, { useCallback, useEffect, useState } from 'react';
import QuestionHeader from '../components/Questions/QuestionHeader';
import QuestionsBox from '../components/Questions/QuestionsBox';
import QuestionsContainer from '../components/Questions/QuestionsContainer';
import Spinner from '../components/UI/Spinner';
import GameOver from '../components/GameOver/GameOver';
import useFetch from '../hooks/useFetch';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const Game: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const {
    data: questions,
    loading,
    error,
    refetch,
  } = useFetch('http://localhost:3030/api/v1/questions');

  useEffect(() => {
    refetch();
  }, [refetch]);

  const resetGameHandler = useCallback(() => {
    setScore(0);
    setCurrentQuestion(0);
    setGameOver(false);
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      {gameOver ? (
        <GameOver score={score} resetGameHandler={resetGameHandler} />
      ) : (
        <QuestionsContainer>
          <QuestionHeader
            question={questions[currentQuestion]?.question}
            score={score}
            currentQuestion={currentQuestion}
          />
          <QuestionsBox
            answers={questions[currentQuestion]?.answers}
            correctAnswer={questions[currentQuestion]?.correctAnswer}
            setCurrentQuestion={setCurrentQuestion}
            setScore={setScore}
            setGameOver={setGameOver}
          />
        </QuestionsContainer>
      )}
    </div>
  );
};

export default Game;
