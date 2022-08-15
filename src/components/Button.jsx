import React from "react";
import "./Button.css";

const Button = ({ children }) => {
  return <button className="btn btn-primary btn-block">{children}</button>;
};

export default Button;
