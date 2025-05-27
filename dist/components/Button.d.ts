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

export { Button, StyledButton };
export type { IButtonProps };
