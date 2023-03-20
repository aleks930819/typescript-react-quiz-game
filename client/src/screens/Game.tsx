import React, { useEffect, useState } from 'react';
import QuestionHeader from '../components/Questions/QuestionHeader';
import QuestionsBox from '../components/Questions/QuestionsBox';
import QuestionsContainer from '../components/Questions/QuestionsContainer';
import Spinner from '../components/UI/Spinner';
import GameOver from '../components/GameOver/GameOver';

interface AnswerObject {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
}

const Game: React.FC = () => {
  const [questions, setQuestions] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    try {
      setLoading(true);
      const fetchQuestions = async () => {
        const response = await fetch('http://localhost:3030/api/v1/questions');
        const data = await response.json();
        if (!mounted) {
          setQuestions(data);
          setLoading(false);
        }
        return data as AnswerObject;
      };
      fetchQuestions();
    } catch (err) {
      console.log(err);
    }

    return () => {
      mounted = false;
    };
  }, []);

  const resetGameHandler = () => {
    setScore(0);
    setCurrentQuestion(0);
    setQuestionNumber(1);
    setUserAnswer('');
    setGameOver(false);
  };

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
          setUserAnswer={setUserAnswer}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          setGameOver={setGameOver}
        />
      </QuestionsContainer>
    </>
  );
};

export default Game;
