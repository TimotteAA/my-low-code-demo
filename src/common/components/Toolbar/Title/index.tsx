import React from "react";
import "./index.scss";

interface IProps {
  text: string;
}
function Title({ text }: IProps) {
  return <h3 className="title">{text}</h3>;
}

export default Title;
