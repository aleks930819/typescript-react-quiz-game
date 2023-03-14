import { useEffect, useState } from 'react';
import QuestionHeader from '../components/Questions/QuestionHeader';
import QuestionsBox from '../components/Questions/QuestionsBox';
import QuestionsContainer from '../components/Questions/QuestionsContainer';

interface AnswerObject {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
}

const Game = () => {
  const [questions, setQuestions] = useState<AnswerObject[]>([]);
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

  console.log(questions);

  return (
    <QuestionsContainer>
      <QuestionHeader />
      <QuestionsBox />
    </QuestionsContainer>
  );
};

export default Game;
