import Ranking from '../components/Ranking';
import Button from '../components/UI/Button';

const Home = () => {
  return (
    <div className="text-primary text-3xl flex justify-center items-center mx-auto h-screen gap-20">
      <div className="">
        <Button to="/game">Start Game</Button>
      </div>
      <Ranking />
    </div>
  );
};

export default Home;
