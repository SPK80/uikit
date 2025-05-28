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

const Input = ({ value, onChange, ...rest }) => {
    return (jsxRuntime.jsx("input", { value: value, onChange: (e) => onChange?.(e.currentTarget.value), ...rest }));
};

const StyledTitle = styled.div `
  color: red;
  font-size: 20px;
  margin-bottom: 10px;
`;
const Search = ({ title = "Поиск", ...rest }) => {
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(StyledTitle, { children: title }), jsxRuntime.jsx(Input, { ...rest })] }));
};

exports.Button = Button;
exports.Input = Input;
exports.Search = Search;
exports.StyledButton = StyledButton;
exports.StyledTitle = StyledTitle;
