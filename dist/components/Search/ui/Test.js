import { jsxs, jsx } from 'react/jsx-runtime';
import { Button } from '../../Button/ui/Button.js';
import styled from '@emotion/styled';

const StyledTitle = styled.div `
  color: red;
  font-size: 20px;
  margin-bottom: 10px;
`;
const Test = ({ title = "Тест", ...rest }) => {
    return (jsxs("div", { children: [jsx(StyledTitle, { children: title }), jsx(Button, { ...rest })] }));
};

export { Test };
