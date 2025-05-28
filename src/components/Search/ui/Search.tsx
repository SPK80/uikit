import { IInputProps, Input } from "@components/Input";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";

export const StyledTitle = styled.div`
  color: red;
  font-size: 20px;
  margin-bottom: 10px;
`;

export interface ISearchProps extends IInputProps {
  title?: ReactNode;
}

export const Search = ({ title = "Поиск", ...rest }: ISearchProps) => {
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <Input {...rest} />
    </div>
  );
};
