const QuestionHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center w-[90vw] h-[10vh] p-5 text-xl">
        <p>Score:0</p>
        <p>Question:1/10</p>
      </div>
      <div className="w-full text-sm sm:text-xl pb-5 border rounded-md flex justify-center items-center sm:w-[90vw] h-[20vh] p-5 bg-secondary px-10">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          inventore enim sint dolore. Praesentium adipisci exercitationem unde!
        </h2>
      </div>
    </>
  );
};

export default QuestionHeader;
