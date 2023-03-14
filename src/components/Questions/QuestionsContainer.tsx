import React from 'react';

interface QuestionsContainerProps {
  children: React.ReactNode;
}

const QuestionsContainer: React.FC<QuestionsContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full h-screen text-primary">
      {children}
    </div>
  );
};

export default QuestionsContainer;
