import React from "react";
import "./index.scss";

interface IProps {
  label: string;
}
function Label({ label }: IProps) {
  return <span className="text">{label}</span>;
}

export default Label;
