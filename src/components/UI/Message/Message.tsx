import React, { ReactNode } from "react";
import "./Message.scss";

type TMessageProps = {
  title: string;
  subtitle: string;
  children?: ReactNode[];
};

function Message({ title, subtitle, children }: TMessageProps) {
  return (
    <div className="message">
      {children && children[0]}
      <h3>{title}</h3>
      <p>{subtitle}</p>
      {children && children[1]}
    </div>
  );
}

export { Message };
