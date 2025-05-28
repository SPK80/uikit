import { jsx, jsxs } from 'react/jsx-runtime';
import styled from '@emotion/styled';

const Input = ({ value, onChange, ...rest }) => {
    return (jsx("input", { value: value, onChange: (e) => onChange?.(e.currentTarget.value), ...rest }));
};

const StyledTitle = styled.div `
  color: red;
  font-size: 20px;
  margin-bottom: 10px;
`;
const Search = ({ title = "Поиск", ...rest }) => {
    return (jsxs("div", { children: [jsx(StyledTitle, { children: title }), jsx(Input, { ...rest })] }));
};

export { Search, StyledTitle };
