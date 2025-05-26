'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Input = (props) => {
    return (jsxRuntime.jsx("input", { ...props }));
};

exports.Input = Input;
