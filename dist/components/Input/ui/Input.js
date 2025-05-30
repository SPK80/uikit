import { jsx } from 'react/jsx-runtime.js';
import debounce from 'lodash/debounce.js';

const Input = ({ value, onChange, ...rest }) => {
    return (jsx("input", { value: value, onChange: debounce((e) => {
            onChange?.(e.currentTarget.value);
        }, 1000), ...rest }));
};

export { Input };
