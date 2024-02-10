import React from "react";

import { Img, Line, Text } from "components";

const FormsColumnstrokeTwo = (props) => {
    return (
        <>
            <div className={props.className}>
                <div className="bg-deep_purple-50 flex flex-col items-start justify-start rounded-tl rounded-tr w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start pl-4 py-1 rounded-tl rounded-tr w-full">
                        <div className="flex flex-1 flex-col h-10 md:h-auto items-start justify-center w-full">
                            <div className="flex flex-col items-center justify-start w-auto">
                                <Text
                                    className="text-base text-gray-900_01 tracking-[0.50px] w-auto"
                                    size="txtRobotoRegular16"
                                >
                                    {props?.industrytext}
                                </Text>
                            </div>
                        </div>
                        <div className="flex flex-col h-12 md:h-auto items-center justify-center w-12">
                            <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                                <div className="flex flex-col items-center justify-center p-2 rounded-[50%] w-10">
                                    <div className="flex flex-col h-6 items-center justify-start w-6">
                                        <Img
                                            className="h-6 w-6"
                                            src="images/img_arrowdown.svg"
                                            alt="arrowdown"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Line className="bg-gray-900_01 h-px w-full" />
            </div>
        </>
    );
};

FormsColumnstrokeTwo.defaultProps = { industrytext: "Select Industry" };

export default FormsColumnstrokeTwo;
