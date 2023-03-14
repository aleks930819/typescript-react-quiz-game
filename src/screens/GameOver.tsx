import Button from '../components/UI/Button';

const GameOver = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto h-screen text-primary text-3xl ">
      <h1 className="pb-5">Game Over</h1>
      <Button to="/game" form>
        Play Again
      </Button>
    </div>
  );
};

export default GameOver;
