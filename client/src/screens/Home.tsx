import Button from '../components/UI/Button';

const Home = () => {
  return (
    <div className="text-primary text-3xl flex justify-center items-center mx-auto h-screen gap-20">
      <div className="flex flex-col gap-5">
        <Button to="/game" form>
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default Home;
