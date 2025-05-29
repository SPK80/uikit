import { jsx, jsxs } from 'react/jsx-runtime';
import { Button as Button$1 } from 'antd';
import styled from '@emotion/styled';

const StyledButton = styled(Button$1) `
  color: red;
  font-size: 20px;
`;
const Button = ({ children, ...props }) => {
    return jsx(StyledButton, { ...props, children: children });
};

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

export { Button, Input, Search, StyledButton, StyledTitle };
