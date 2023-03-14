import { useEffect, useState } from 'react';
import QuestionHeader from '../components/Questions/QuestionHeader';
import QuestionsBox from '../components/Questions/QuestionsBox';
import QuestionsContainer from '../components/Questions/QuestionsContainer';
import Spinner from '../components/UI/Spinner';

interface AnswerObject {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
}

const Game = () => {
  const [questions, setQuestions] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    try {
      setLoading(true);
      const fetchQuestions = async () => {
        const response = await fetch('http://localhost:3005/questions');
        const data = await response.json();
        if (!mounted) {
          setQuestions(data);
          setLoading(false);
        }
      };
      fetchQuestions();
    } catch (err) {
      console.log(err);
    }

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <Spinner />;
  return (
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
      />
    </QuestionsContainer>
  );
};

export default Game;
