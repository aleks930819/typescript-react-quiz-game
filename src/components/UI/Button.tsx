import { Link } from 'react-router-dom';
import React from 'react';
import className from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  game?: boolean;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({ children, game, to }) => {
  const classes = className(
    'bg-primary text-black flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200 ease-in-out ',
    {
      'border w-screen h-auto sm:w-[40vw] sm:h-[10vh] rounded-lg flex items-center justify-center bg-secondary text-primary hover:bg-gray-200 hover:text-black':
        game,
    }
  );

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
};

export default Button;
