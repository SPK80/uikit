import React from 'react';

export interface IButtonProps{
  children:React.ReactNode
}

export const Button = ({
  children,
  ...props
}:IButtonProps) => {
  return (
    <button
      {...props}
    >
      {children}
    </button>
  );
}; 