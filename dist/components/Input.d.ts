import * as react_jsx_runtime from 'react/jsx-runtime';

interface IInputProps {
    value?: string;
    onChange?: (value: string) => void;
}
declare const Input: ({ value, onChange, ...rest }: IInputProps) => react_jsx_runtime.JSX.Element;

export { Input };
export type { IInputProps };
