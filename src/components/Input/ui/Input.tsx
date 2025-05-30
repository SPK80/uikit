import React from "react";
import debounce from "lodash/debounce";

export interface IInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = ({ value, onChange, ...rest }: IInputProps) => {
  return (
    <input
      value={value}
      onChange={debounce((e) => {
        onChange?.(e.currentTarget.value);
      }, 1000)}
      {...rest}
    />
  );
};
