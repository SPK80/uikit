import { jsx } from 'react/jsx-runtime';

const Input = ({ value, onChange, ...rest }) => {
    return (jsx("input", { value: value, onChange: (e) => onChange?.(e.currentTarget.value), ...rest }));
};

export { Input };
