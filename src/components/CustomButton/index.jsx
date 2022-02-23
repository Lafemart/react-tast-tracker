import React from "react";
import { CustomButton } from "./button.styles";

const Button = ({ primary, handleClick, width, children }) => (
  <CustomButton primary={primary} width={width} onClick={handleClick}>
    {children}
  </CustomButton>
);

export default Button;
