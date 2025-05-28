import React, { ReactNode } from "react";
import { Button as AntButton } from "antd";
import styled from "@emotion/styled";

export const StyledButton = styled(AntButton)`
  color: red;
  font-size: 20px;
`;

export interface IButtonProps {
  children: ReactNode;
}

export const Button = ({ children, ...props }: IButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
