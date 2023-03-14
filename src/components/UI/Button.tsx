import { Link } from 'react-router-dom';
import React from 'react';
import className from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({ children, to }) => {
  const classes = className(
    'bg-primary text-black flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200 ease-in-out ',
    {}
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
