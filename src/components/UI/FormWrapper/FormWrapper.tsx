import React, { ReactNode } from "react";
import "./FormWrapper.scss";

export interface IChildrenProps {
  children: ReactNode;
}

function FormWrapper({ children }: IChildrenProps) {
  return <div className="formwrapper">{children}</div>;
}

export { FormWrapper };
