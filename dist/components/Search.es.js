import { jsx, jsxs } from 'react/jsx-runtime';

const Input = (props) => {
    return (jsx("input", { ...props }));
};

const Search = (props) => {
    return (jsxs("div", { children: [jsx("span", { children: "\u041F\u043E\u0438\u0441\u043A" }), jsx(Input, { ...props })] }));
};

export { Search };
