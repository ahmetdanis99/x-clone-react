import classNames from "classnames";
import PropTypes from "prop-types";
import { createElement } from "react";

export default function Button({ size, variant, children }) {
  return createElement(
    "button",
    {
      className: classNames(
        "rounded-full flex items-center justify-center font-bold text-white transition-colors",
        {
          "px-4 h-8": size === "small",
          "px-4 h-9": size === "normal",
          "px-4 h-[52px] text-[17px] w-full": size === "large",
          "bg-[#1d9bf0] hover:bg-[#1a8cd8]": variant === "primary",
          "bg-white text-[#000000]": variant === "white",
        }
      ),
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"]),
  variant: PropTypes.oneOf(["primary","white"])
};

Button.defaultProps = {
  size: "normal",
  variant: "primary",
};
