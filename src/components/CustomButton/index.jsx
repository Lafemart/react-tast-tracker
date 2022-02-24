import React from "react";
import { CustomButton } from "./button.styles";

const Button = (props) => (
  <CustomButton
    width={props.width}
    round={props.round}
    primary={props.primary}
    onClick={props.handleClick}
    otherColors={props.otherColors}
  >
    {props.children}
  </CustomButton>
);

export default Button;
