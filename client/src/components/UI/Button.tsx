/* eslint-disable react/require-default-props */

import React from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  game?: boolean;
  form?: boolean;
  to?: string;
  success?: boolean;
  danger?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  game,
  form,
  to,
  success,
  danger,
  onClick,
}) => {
  const classes = className(
    'flex items-center justify-center gap-2 rounded-lg  transition duration-200 ease-in-out ',
    {
      'bg-secondary border w-screen h-auto sm:w-[40vw] sm:h-[10vh] rounded-lg flex items-center justify-center  text-primary hover:bg-gray-200 hover:text-black px-4 py-2 ':
        game,

      'border text-primary px-10 py-5 bg-secondary ': form,
      'bg-success text-white px-10 py-5 rounded-lg': success,
      'bg-danger text-white px-10 py-5 rounded-lg': danger,
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
    <button className={classes} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
