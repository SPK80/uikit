import { Button, IButtonProps } from "../../Button";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const StyledTitle = styled.div`
  color: red;
  font-size: 20px;
  margin-bottom: 10px;
`;

export interface ITestProps extends IButtonProps {
  title?: ReactNode;
}

export const Test = ({ title = "Тест", ...rest }: ITestProps) => {
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <Button {...rest} />
    </div>
  );
};
