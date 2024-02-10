import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" };
const variants = {
    outline: {
        red_700: "outline outline-[1px] outline-red-700 text-red-700",
        blue_gray_900:
            "outline outline-[1px] outline-blue_gray-900 text-blue_gray-900",
    },
    fill: {
        gray_900: "bg-gray-900 text-white-A700",
        blue_gray_900: "bg-blue_gray-900 text-white-A700",
        white_A700: "bg-white-A700",
        green_A700_dd: "bg-green-A700_dd text-white-A700",
        deep_purple_50: "bg-deep_purple-50 text-gray-900",
        gray_200: "bg-gray-200 text-gray-900",
        white_A700_66: "bg-white-A700_66",
    },
};
const sizes = { xs: "p-[3px]", sm: "p-1.5", md: "p-[11px]", lg: "p-[15px]" };

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape = "",
    size = "",
    variant = "",
    color = "",
    ...restProps
}) => {
    return (
        <button
            className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    shape: PropTypes.oneOf(["circle", "round"]),
    size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
    variant: PropTypes.oneOf(["outline", "fill"]),
    color: PropTypes.oneOf([
        "red_700",
        "blue_gray_900",
        "gray_900",
        "white_A700",
        "green_A700_dd",
        "deep_purple_50",
        "gray_200",
        "white_A700_66",
    ]),
};

export { Button };
