'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Input = (props) => {
    return (jsxRuntime.jsx("input", { ...props }));
};

const Search = (props) => {
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("span", { children: "\u041F\u043E\u0438\u0441\u043A" }), jsxRuntime.jsx(Input, { ...props })] }));
};

exports.Search = Search;
