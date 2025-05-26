import { jsx } from 'react/jsx-runtime';

const Button = ({ children, ...props }) => {
    return (jsx("button", { ...props, children: children }));
};

export { Button };
