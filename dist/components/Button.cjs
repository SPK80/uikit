'use strict';

var jsxRuntime = require('react/jsx-runtime');
var antd = require('antd');
var styled = require('@emotion/styled');

const StyledButton = styled(antd.Button) `
  color: red;
  font-size: 20px;
`;
const Button = ({ children, ...props }) => {
    return jsxRuntime.jsx(StyledButton, { ...props, children: children });
};

exports.Button = Button;
exports.StyledButton = StyledButton;
