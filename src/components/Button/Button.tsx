/* eslint-disable  @typescript-eslint/no-explicit-any */
import * as React from "react";

import { ButtonElement } from "./Button.style";

type ButtonType = {
  type?: "submit";
  text: string;
  addStyle ?: string;
  color ?: string;
  backgroundColor ?: string;
  onClick ?: () => void;
  width ?: string;
};

const Button = (props: ButtonType): any => {
  return (
    <ButtonElement onClick={props.onClick} {...props} type={props.type || "button"}>
      {props.text}
    </ButtonElement>
  );
};

export default Button;
