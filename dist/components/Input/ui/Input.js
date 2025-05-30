import { jsx } from 'react/jsx-runtime';
import debounce from 'lodash/debounce';

const Input = ({ value, onChange, ...rest }) => {
    return (jsx("input", { value: value, onChange: debounce((e) => {
            onChange?.(e.currentTarget.value);
        }, 1000), ...rest }));
};

export { Input };
