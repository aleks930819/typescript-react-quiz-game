const data = [
  {
    id: 1,
    name: 'John Doe',
    score: 100,
  },
  {
    id: 2,
    name: 'Jane Doe',
    score: 90,
  },
  {
    id: 3,
    name: 'John Smith',
    score: 80,
  },
];

const Ranking = () => {
  return (
    <div className="flex flex-col items-center border w-[400px] h-[300px] rounded-lg bg-secondary">
      <h1 className="text-2xl font-bold mb-10 mt-10">Top 3 Players</h1>
      <div className="flex flex-col items-center gap-5 mb-10">
        {data.map((item, i) => (
          <div
            className="flex flex-row gap-10 items-center justify-between w-full"
            key={item.id}
          >
            <p className="text-lg italic">{i + 1}</p>
            <p className="text-xl font-bold">{item.name}</p>
            <p className="text-xl font-bold">Score: {item.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
