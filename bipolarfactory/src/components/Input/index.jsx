import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = { fill: { blue_gray_50: "bg-blue_gray-50" } };
const shapes = {
    round: "rounded-bl-none rounded-br-none rounded-tl rounded-tr",
};
const sizes = { xs: "p-4", sm: "pb-[19px] pl-4 pr-[17px] pt-[17px]" };

const Input = React.forwardRef(
    (
        {
            wrapClassName = "",
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            children,
            errors = [],
            label = "",
            prefix,
            suffix,
            onChange,
            shape = "",
            size = "",
            variant = "",
            color = "",
            ...restProps
        },
        ref,
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value);
        };

        return (
            <>
                <div
                    className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
                >
                    {!!label && label}
                    {!!prefix && prefix}
                    <input
                        ref={ref}
                        className={`${className} bg-transparent border-0`}
                        type={type}
                        name={name}
                        onChange={handleChange}
                        placeholder={placeholder}
                        {...restProps}
                    />
                    {!!suffix && suffix}
                </div>
                {!!errors && <ErrorMessage errors={errors} />}
            </>
        );
    },
);

Input.propTypes = {
    wrapClassName: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs", "sm"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["blue_gray_50"]),
};

export { Input };
