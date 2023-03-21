import React, { useCallback, useEffect, useState } from 'react';
import QuestionHeader from '../components/Questions/QuestionHeader';
import QuestionsBox from '../components/Questions/QuestionsBox';
import QuestionsContainer from '../components/Questions/QuestionsContainer';
import Spinner from '../components/UI/Spinner';
import GameOver from '../components/GameOver/GameOver';
import useFetch from '../hooks/useFetch';

const Game: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const { data: questions, loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData('http://localhost:3030/api/v1/questions');
  }, [fetchData]);

  const resetGameHandler = useCallback(() => {
    setScore(0);
    setCurrentQuestion(0);
    setGameOver(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      {gameOver && <GameOver resetGameHandler={resetGameHandler} />}
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
    </>
  );
};

export default Game;
