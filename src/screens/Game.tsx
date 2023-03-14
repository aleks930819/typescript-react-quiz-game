import QuestionHeader from '../components/Questions/QuestionHeader';
import QuestionsBox from '../components/Questions/QuestionsBox';
import QuestionsContainer from '../components/Questions/QuestionsContainer';

const Game = () => {
  return (
    <QuestionsContainer>
      <QuestionHeader />
      <QuestionsBox />
    </QuestionsContainer>
  );
};

export default Game;
