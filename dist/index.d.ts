import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface IButtonProps {
    children: React.ReactNode;
}
declare const Button: ({ children, ...props }: IButtonProps) => react_jsx_runtime.JSX.Element;

interface IInputProps {
    value: string;
}
declare const Input: (props: IInputProps) => react_jsx_runtime.JSX.Element;

interface ISearchProps {
    value: string;
}
declare const Search: (props: ISearchProps) => react_jsx_runtime.JSX.Element;

export { Button, Input, Search };
export type { IButtonProps, IInputProps, ISearchProps };
