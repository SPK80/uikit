import { jsx } from 'react/jsx-runtime';
import { Button as Button$1 } from 'antd';
import newStyled from '../../../node_modules/@emotion/styled/dist/emotion-styled.esm.js';

const StyledButton = newStyled(Button$1) `
  color: red;
  font-size: 20px;
`;
const Button = ({ children, ...props }) => {
    return jsx(StyledButton, { ...props, children: children });
};

export { Button, StyledButton };
