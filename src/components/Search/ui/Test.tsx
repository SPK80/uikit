import { Button, IButtonProps } from "../../Button";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";

export const StyledTitle = styled.div`
  color: red;
  font-size: 20px;
  margin-bottom: 10px;
`;

export interface ISearchProps extends IButtonProps {
  title?: ReactNode;
}

export const Test = ({ title = "Тест", ...rest }: ISearchProps) => {
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <Button {...rest} />
    </div>
  );
};
