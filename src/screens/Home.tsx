import Ranking from '../components/Ranking';

const Home = () => {
  return (
    <div className="text-primary text-3xl flex justify-center items-center mx-auto h-screen gap-20">
      <div className="">
        <h1>Start Game</h1>
      </div>
      <Ranking />
    </div>
  );
};

export default Home;
