'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styled = require('@emotion/styled');

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

exports.Search = Search;
exports.StyledTitle = StyledTitle;
