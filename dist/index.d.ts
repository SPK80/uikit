import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _emotion_styled from '@emotion/styled';
import * as _emotion_react from '@emotion/react';
import * as antd from 'antd';
import React, { ReactNode } from 'react';

declare const StyledButton: _emotion_styled.StyledComponent<antd.ButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement> & {
    theme?: _emotion_react.Theme;
}, {}, {}>;
interface IButtonProps {
    children: ReactNode;
}
declare const Button: ({ children, ...props }: IButtonProps) => react_jsx_runtime.JSX.Element;

interface IInputProps {
    value?: string;
    onChange?: (value: string) => void;
}
declare const Input: ({ value, onChange, ...rest }: IInputProps) => react_jsx_runtime.JSX.Element;

interface ISearchProps extends IInputProps {
    title?: ReactNode;
}
declare const Search: ({ title, ...rest }: ISearchProps) => react_jsx_runtime.JSX.Element;

interface ITestProps extends IButtonProps {
    title?: ReactNode;
}
declare const Test: ({ title, ...rest }: ITestProps) => react_jsx_runtime.JSX.Element;

export { Button, Input, Search, StyledButton, Test };
export type { IButtonProps, IInputProps, ISearchProps, ITestProps };
