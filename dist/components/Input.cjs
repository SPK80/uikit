'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Input = ({ value, onChange, ...rest }) => {
    return (jsxRuntime.jsx("input", { value: value, onChange: (e) => onChange?.(e.currentTarget.value), ...rest }));
};

exports.Input = Input;
