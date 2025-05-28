import React from "react";

export interface IInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = ({ value, onChange, ...rest }: IInputProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange?.(e.currentTarget.value)}
      {...rest}
    />
  );
};
