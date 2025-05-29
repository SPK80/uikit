import { jsxs, jsx } from 'react/jsx-runtime';
import { Input } from '../../Input/ui/Input.js';
import newStyled from '../../../node_modules/@emotion/styled/dist/emotion-styled.esm.js';

const StyledTitle = newStyled.div `
  color: red;
  font-size: 20px;
  margin-bottom: 10px;
`;
const Search = ({ title = "Поиск", ...rest }) => {
    return (jsxs("div", { children: [jsx(StyledTitle, { children: title }), jsx(Input, { ...rest })] }));
};

export { Search, StyledTitle };
