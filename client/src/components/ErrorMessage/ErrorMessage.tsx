import React from 'react';

interface Props {
  message: string;
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-2xl text-red-500">{message}</p>
    </div>
  );
};

export default ErrorMessage;
