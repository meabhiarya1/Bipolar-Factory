import React from "react";

const sizeClasses = {
    txtRobotoRomanMedium12: "font-medium font-roboto",
    txtNotoSansMedium10: "font-medium font-notosans",
    txtNotoSansMedium13: "font-medium font-notosans",
    txtRobotoRomanSemiBold16: "font-roboto font-semibold",
    txtRobotoRomanRegular12Gray600: "font-normal font-roboto",
    txtRobotoRomanMedium28: "font-medium font-roboto",
    txtRobotoRomanSemiBold20: "font-roboto font-semibold",
    txtRobotoRomanBold36: "font-bold font-roboto",
    txtRobotoRomanRegular24: "font-normal font-roboto",
    txtNotoSansRegular11: "font-normal font-notosans",
    txtRobotoRomanMedium20: "font-medium font-roboto",
    txtRobotoRomanBold40: "font-bold font-roboto",
    txtRobotoRomanSemiBold13Green500: "font-roboto font-semibold",
    txtRobotoRomanBold6: "font-bold font-roboto",
    txtRobotoRomanRegular13Blue900: "font-normal font-roboto",
    txtRobotoRomanRegular16: "font-normal font-roboto",
    txtNotoSansSemiBold14: "font-notosans font-semibold",
    txtRobotoRegular16: "font-normal font-roboto",
    txtRobotoRomanSemiBold14: "font-roboto font-semibold",
    txtRobotoRomanSemiBold13: "font-roboto font-semibold",
    txtRobotoRomanRegular12: "font-normal font-roboto",
    txtRobotoRomanSemiBold13Gray900: "font-roboto font-semibold",
    txtRobotoRomanMedium16: "font-medium font-roboto",
    txtRobotoRomanRegular14: "font-normal font-roboto",
    txtRobotoRomanRegular36: "font-normal font-roboto",
    txtRobotoRomanRegular13: "font-normal font-roboto",
    txtRobotoMedium16: "font-medium font-roboto",
    txtRobotoRomanMedium14: "font-medium font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
    const Component = as || "p";

    return (
        <Component
            className={`text-left ${className} ${size && sizeClasses[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Text };
