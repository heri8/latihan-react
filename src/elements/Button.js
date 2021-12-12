import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const className = ["button"];
  if (props.isPrimary) className.push("button-primary");
  if (props.isWideMobile) className.push("button-mobile-wide");
  if (props.isSmall) className.push("button-sm");
  if (props.isBlock) className.push("button-block");
  return <div className={className.join(" ")}>{props.children}</div>;
}

Button.PropTypes = {
  isPrimary: PropTypes.bool,
  isWideMobile: PropTypes.bool,
  isSmall: PropTypes.bool,
  isBlock: PropTypes.bool,
};
