'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Button = ({ children, ...props }) => {
    return (jsxRuntime.jsx("button", { ...props, children: children }));
};

exports.Button = Button;
