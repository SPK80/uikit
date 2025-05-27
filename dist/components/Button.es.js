import { jsx } from 'react/jsx-runtime';
import { Button as Button$1 } from 'antd';
import styled from '@emotion/styled';

const StyledButton = styled(Button$1) `
  color: red;
  font-size: 20px;
`;
const Button = ({ children, ...props }) => {
    return jsx(StyledButton, { ...props, children: children });
};

export { Button, StyledButton };
