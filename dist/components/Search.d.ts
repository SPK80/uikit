import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _emotion_styled from '@emotion/styled';
import * as _emotion_react from '@emotion/react';
import React, { ReactNode } from 'react';

interface IInputProps {
    value?: string;
    onChange?: (value: string) => void;
}

declare const StyledTitle: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface ISearchProps extends IInputProps {
    title?: ReactNode;
}
declare const Search: ({ title, ...rest }: ISearchProps) => react_jsx_runtime.JSX.Element;

export { Search, StyledTitle };
export type { ISearchProps };
