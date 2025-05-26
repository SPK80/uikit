import React from 'react';

export interface IInputProps {
  value:string
}

export const Input = (  props :IInputProps) => {
  return (
    <input
      {...props}
    />
  );
}; 