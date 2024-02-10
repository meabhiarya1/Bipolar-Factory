import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const ChartsHealthgraph = (props) => {
    return (
        <>
            <div className={props.className}>
                <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-between w-full">
                        <Text
                            className="text-black-900 text-xl tracking-[0.10px] w-auto"
                            size="txtRobotoRomanSemiBold20"
                        >
                            {props?.camerahealthtext}
                        </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
                        <div className="h-[190px] relative w-[190px]">
                            <div className="!w-[190px] absolute h-[190px] inset-[0] justify-center m-auto overflow-visible">
                                <CircularProgressbar
                                    className="!w-[190px] absolute h-[190px] inset-[0] justify-center m-auto overflow-visible"
                                    value={48}
                                    counterClockwise
                                    strokeWidth={8}
                                    styles={{
                                        trail: { strokeWidth: 7, stroke: "#d9d9d9" },
                                        path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(108deg)",
                                            stroke: "#18a01e",
                                        },
                                    }}
                                ></CircularProgressbar>
                            </div>
                            <div className="!w-[190px] absolute h-[190px] inset-[0] justify-center m-auto overflow-visible">
                                <CircularProgressbar
                                    className="!w-[190px] absolute h-[190px] inset-[0] justify-center m-auto overflow-visible"
                                    value={30}
                                    counterClockwise
                                    strokeWidth={8}
                                    styles={{
                                        trail: { strokeWidth: 7, stroke: "#d9d9d9" },
                                        path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(216deg)",
                                            stroke: "#00db4a",
                                        },
                                    }}
                                ></CircularProgressbar>
                            </div>
                            <div className="!w-[190px] absolute h-[190px] inset-[0] justify-center m-auto overflow-visible">
                                <CircularProgressbar
                                    className="!w-[190px] absolute h-[190px] inset-[0] justify-center m-auto overflow-visible"
                                    value={16}
                                    counterClockwise
                                    strokeWidth={8}
                                    styles={{
                                        trail: { strokeWidth: 7, stroke: "#d9d9d9" },
                                        path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(270deg)",
                                            stroke: "#fa8a34",
                                        },
                                    }}
                                ></CircularProgressbar>
                            </div>
                            <div className="!w-[190px] absolute h-[190px] inset-[0] justify-center m-auto overflow-visible">
                                <CircularProgressbar
                                    className="!w-[190px] absolute h-[190px] inset-[0] justify-center m-auto overflow-visible"
                                    value={7}
                                    counterClockwise
                                    strokeWidth={8}
                                    styles={{
                                        trail: { strokeWidth: 7, stroke: "#d9d9d9" },
                                        path: {
                                            strokeLinecap: "square",
                                            height: "100%",
                                            transformOrigin: "center",
                                            transform: "rotate(244deg)",
                                            stroke: "#ed1c24",
                                        },
                                    }}
                                ></CircularProgressbar>
                            </div>
                            <div className="absolute flex flex-col gap-0.5 h-max inset-[0] items-center justify-center m-auto w-[65px]">
                                <Text
                                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[0.10px] w-auto"
                                    size="txtRobotoRomanBold36"
                                >
                                    {props?.numbertext}
                                </Text>
                                <Text
                                    className="text-base text-black-900 tracking-[0.10px] w-auto"
                                    size="txtRobotoRomanRegular16"
                                >
                                    {props?.camerastext}
                                </Text>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[22px] items-end justify-start w-full">
                            <div className="flex flex-col gap-3.5 items-end justify-start w-full">
                                <Input
                                    name="info"
                                    placeholder="Totally 124 Cameras are in 9 NVRs and installed in 12 Locations"
                                    className="!placeholder:text-black-900 !text-black-900 font-medium font-roboto leading-[normal] p-0 text-left text-sm tracking-[0.50px] w-full"
                                    wrapClassName="flex rounded-md w-full"
                                    prefix={
                                        <Img
                                            className="h-6 mr-2.5 my-auto"
                                            src="images/img_gameiconscctvcamera.svg"
                                            alt="game-icons:cctv-camera"
                                        />
                                    }
                                    color="blue_gray_50"
                                    size="xs"
                                    variant="fill"
                                ></Input>
                                <div className="bg-pink-100 flex sm:flex-col flex-row gap-4 items-center justify-between p-4 rounded-md w-full">
                                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
                                        <Img
                                            className="h-6 w-6"
                                            src="images/img_typcninfo.svg"
                                            alt="typcninfo"
                                        />
                                        <Text
                                            className="text-black-900 text-sm tracking-[0.50px] w-auto"
                                            size="txtRobotoRomanMedium14"
                                        >
                                            {props?.durationtext}
                                        </Text>
                                    </div>
                                    <Button
                                        className="!text-gray-900 cursor-pointer font-roboto font-semibold h-[34px] leading-[normal] text-center text-xs tracking-[0.50px]"
                                        shape="round"
                                        color="white_A700"
                                        size="md"
                                        variant="fill"
                                    >
                                        {props?.viewcamerasbutton}
                                    </Button>
                                </div>
                            </div>
                            <List
                                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                                orientation="horizontal"
                            >
                                <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                    <div className="bg-green-800_01 h-4 rounded-[50%] w-4"></div>
                                    <Text
                                        className="text-black-900 text-sm w-auto"
                                        size="txtRobotoRomanRegular14"
                                    >
                                        {props?.superhealthytext}
                                    </Text>
                                    <Img
                                        className="h-4 w-4"
                                        src="images/img_phinfofill.svg"
                                        alt="phinfofill"
                                    />
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                    <div className="bg-green-A700 h-4 rounded-[50%] w-4"></div>
                                    <Text
                                        className="text-black-900 text-sm w-auto"
                                        size="txtRobotoRomanRegular14"
                                    >
                                        {props?.healthytext}
                                    </Text>
                                    <Img
                                        className="h-4 w-4"
                                        src="images/img_phinfofill.svg"
                                        alt="phinfofill"
                                    />
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                    <div className="bg-deep_orange-400 h-4 rounded-[50%] w-4"></div>
                                    <Text
                                        className="text-black-900 text-sm w-auto"
                                        size="txtRobotoRomanRegular14"
                                    >
                                        {props?.warningtext}
                                    </Text>
                                    <Img
                                        className="h-4 w-4"
                                        src="images/img_phinfofill.svg"
                                        alt="phinfofill"
                                    />
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                    <div className="bg-red-700 h-4 rounded-[50%] w-4"></div>
                                    <Text
                                        className="text-black-900 text-sm w-auto"
                                        size="txtRobotoRomanRegular14"
                                    >
                                        {props?.dangertext}
                                    </Text>
                                    <Img
                                        className="h-4 w-4"
                                        src="images/img_phinfofill.svg"
                                        alt="phinfofill"
                                    />
                                </div>
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ChartsHealthgraph.defaultProps = {
    camerahealthtext: "Camera Health",
    numbertext: "124",
    camerastext: "Cameras",
    durationtext: "6 Cameras were experiencing downtime in Last 30 days",
    viewcamerasbutton: "View Cameras",
    superhealthytext: "Super Healthy (56)",
    healthytext: "Healthy (35)",
    warningtext: "Warning (27)",
    dangertext: "Danger (6)",
};

export default ChartsHealthgraph;
