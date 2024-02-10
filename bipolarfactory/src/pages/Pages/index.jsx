import React from "react";

import { Button, Img, List, Text } from "components";

const Pages = () => {
    return (
        <>
            <div className="bg-gray-50 flex flex-col font-roboto items-center justify-start mx-auto p-[75px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-9 items-start justify-start max-w-[1115px] mx-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[232px] items-start justify-start w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                            <Button
                                className="flex h-[45px] items-center justify-center w-[45px]"
                                shape="round"
                                color="gray_200"
                                size="md"
                                variant="fill"
                            >
                                <Img
                                    className="h-[21px]"
                                    src="images/img_arrowleft.svg"
                                    alt="arrowleft"
                                />
                            </Button>
                            <div className="flex flex-col gap-3 items-start justify-start w-[456px] sm:w-full">
                                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                                    <Text
                                        className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[0.50px] w-auto"
                                        size="txtRobotoRomanBold36"
                                    >
                                        <span className="text-gray-900 font-roboto text-left font-bold">
                                            VMS
                                        </span>
                                        <span className="text-gray-900 font-roboto text-left text-base font-medium">
                                            {" "}
                                            / Cameras /
                                        </span>
                                        <span className="text-gray-900 font-roboto text-left text-base font-medium">
                                            {" "}
                                        </span>
                                        <span className="text-black-900 font-roboto text-left text-base font-medium">
                                            Camera Details
                                        </span>
                                    </Text>
                                    <Text
                                        className="capitalize text-black-900_77 text-xs tracking-[0.50px] w-auto"
                                        size="txtRobotoRomanRegular12"
                                    >
                                        Bank Entrance-front-view Camera1
                                    </Text>
                                </div>
                                <Text
                                    className="text-black-900 text-sm tracking-[0.50px] w-auto"
                                    size="txtRobotoRomanRegular14"
                                >
                                    View and manage camera details, recordings and connection
                                    details
                                </Text>
                            </div>
                        </div>
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-start justify-start w-auto sm:w-full">
                            <Button
                                className="cursor-pointer font-medium rounded-lg text-center text-sm tracking-[0.10px] w-[120px]"
                                shape="round"
                                color="blue_gray_900"
                                size="lg"
                                variant="outline"
                            >
                                Edit Camera
                            </Button>
                            <Button
                                className="cursor-pointer font-medium rounded-lg text-center text-sm tracking-[0.10px] w-[120px]"
                                shape="round"
                                color="blue_gray_900"
                                size="lg"
                                variant="outline"
                            >
                                Deactivate
                            </Button>
                            <Button
                                className="cursor-pointer font-medium rounded-lg text-center text-sm tracking-[0.10px] w-[120px]"
                                shape="round"
                                color="red_700"
                                size="lg"
                                variant="outline"
                            >
                                Delete Camera
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[23px] sm:px-5 rounded w-[99%] md:w-full">
                        <div className="flex flex-col items-start justify-start mb-6 mt-3 w-auto md:w-full">
                            <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-auto sm:w-full">
                                    <Button
                                        className="cursor-pointer flex items-center justify-center min-w-[228px] rounded-lg"
                                        leftIcon={
                                            <Img
                                                className="h-6 mr-2.5"
                                                src="images/img_upload.svg"
                                                alt="upload"
                                            />
                                        }
                                        shape="round"
                                        color="gray_200"
                                        size="md"
                                        variant="fill"
                                    >
                                        <div className="font-medium text-left text-sm tracking-[0.50px]">
                                            View Recorded Videos
                                        </div>
                                    </Button>
                                    <Button
                                        className="cursor-pointer flex items-center justify-center min-w-[186px] rounded-lg"
                                        leftIcon={
                                            <Img
                                                className="h-6 mr-2.5"
                                                src="images/img_uimrefresh.svg"
                                                alt="uim:refresh"
                                            />
                                        }
                                        shape="round"
                                        color="gray_200"
                                        size="md"
                                        variant="fill"
                                    >
                                        <div className="font-medium text-left text-sm tracking-[0.50px]">
                                            Refetch Camera
                                        </div>
                                    </Button>
                                </div>
                                <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
                                    <div className="h-[336px] relative w-[57%] md:w-full">
                                        <Img
                                            className="h-[336px] m-auto object-cover rounded-[12px] w-full"
                                            src="images/img_rectangle31.png"
                                            alt="rectangleThirtyOne"
                                        />
                                        <div className="absolute bottom-[4%] flex flex-row sm:gap-10 gap-[360px] inset-x-[0] items-center justify-between mx-auto w-auto">
                                            <Text
                                                className="text-[13px] text-white-A700 tracking-[0.10px] w-auto"
                                                size="txtRobotoRomanSemiBold13"
                                            >
                                                01/05/2023 02:42:21 PM
                                            </Text>
                                            <Text
                                                className="text-[13px] text-white-A700 tracking-[0.10px] w-auto"
                                                size="txtRobotoRomanSemiBold13"
                                            >
                                                Hall 01
                                            </Text>
                                        </div>
                                    </div>
                                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[19px] rounded-md w-[42%] md:w-full">
                                        <div className="flex flex-col gap-6 items-start justify-start mb-11 w-[390px] sm:w-full">
                                            <div className="flex flex-row gap-3 items-start justify-between w-full">
                                                <Text
                                                    className="text-black-900 text-xl tracking-[0.10px] w-auto"
                                                    size="txtRobotoRomanSemiBold20"
                                                >
                                                    Camera Details
                                                </Text>
                                                <Button
                                                    className="cursor-pointer font-semibold leading-[normal] min-w-[53px] rounded text-center text-xs tracking-[0.50px]"
                                                    shape="round"
                                                    color="green_A700_dd"
                                                    size="xs"
                                                    variant="fill"
                                                >
                                                    Active
                                                </Button>
                                            </div>
                                            <div className="flex flex-col gap-3 items-start justify-start w-auto">
                                                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                                    <Text
                                                        className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanSemiBold14"
                                                    >
                                                        Location:
                                                    </Text>
                                                    <Text
                                                        className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanRegular13"
                                                    >
                                                        Coimbatore
                                                    </Text>
                                                </div>
                                                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                                    <Text
                                                        className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanSemiBold14"
                                                    >
                                                        City:
                                                    </Text>
                                                    <Text
                                                        className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanRegular13"
                                                    >
                                                        Coimbatore
                                                    </Text>
                                                </div>
                                                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                                    <Text
                                                        className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanSemiBold14"
                                                    >
                                                        Timezone:
                                                    </Text>
                                                    <Text
                                                        className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanRegular13"
                                                    >
                                                        Delhi-India
                                                    </Text>
                                                </div>
                                                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                                    <Text
                                                        className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanSemiBold14"
                                                    >
                                                        Date added:
                                                    </Text>
                                                    <Text
                                                        className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanRegular13"
                                                    >
                                                        Aug 03, 2023 12:01:42 PM
                                                    </Text>
                                                </div>
                                                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                                    <Text
                                                        className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanSemiBold14"
                                                    >
                                                        Last update:
                                                    </Text>
                                                    <Text
                                                        className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanRegular13"
                                                    >
                                                        Aug 03, 2023 12:01:42 PM
                                                    </Text>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 items-start justify-start w-auto">
                                                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                                    <Text
                                                        className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanSemiBold14"
                                                    >
                                                        Manufacture details:
                                                    </Text>
                                                    <Text
                                                        className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanRegular13"
                                                    >
                                                        ADT
                                                    </Text>
                                                </div>
                                                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                                    <Text
                                                        className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanSemiBold14"
                                                    >
                                                        RTSP/HLS URL:
                                                    </Text>
                                                    <Text
                                                        className="text-[13px] text-blue-900 tracking-[0.10px] underline w-auto"
                                                        size="txtRobotoRomanRegular13Blue900"
                                                    >
                                                        Copy URL
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
                                    <Text
                                        className="text-black-900 text-xl tracking-[0.50px] w-auto"
                                        size="txtRobotoRomanSemiBold20"
                                    >
                                        Camera Health and Alert
                                    </Text>
                                    <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
                                        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[17px] rounded-md w-full">
                                            <div className="flex flex-col items-start justify-start w-[297px]">
                                                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                                                    <Text
                                                        className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanSemiBold14"
                                                    >
                                                        Offline Alert
                                                    </Text>
                                                    <Text
                                                        className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanRegular13"
                                                    >
                                                        If camera is continuously offline for
                                                    </Text>
                                                    <Text
                                                        className="text-gray-900 text-xl tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanMedium20"
                                                    >
                                                        12 minutes
                                                    </Text>
                                                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                                                        <Text
                                                            className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                            size="txtRobotoRomanRegular13"
                                                        >
                                                            Send an email to
                                                        </Text>
                                                        <Text
                                                            className="text-[13px] text-gray-900 tracking-[0.10px] w-auto"
                                                            size="txtRobotoRomanSemiBold13Gray900"
                                                        >
                                                            email.com
                                                        </Text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[15px] rounded-md w-full">
                                            <div className="flex flex-col items-start justify-start w-[297px]">
                                                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                                                    <Text
                                                        className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanSemiBold14"
                                                    >
                                                        Health Grade
                                                    </Text>
                                                    <Text
                                                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanMedium28"
                                                    >
                                                        96%
                                                    </Text>
                                                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                                                        <Text
                                                            className="leading-[18.00px] max-w-[244px] md:max-w-full text-[13px] text-gray-600 tracking-[0.10px]"
                                                            size="txtRobotoRomanRegular13"
                                                        >
                                                            Cheers, this camera had no offline time in the
                                                            last 30 days
                                                        </Text>
                                                        <Text
                                                            className="text-[13px] text-green-500 tracking-[0.10px] w-auto"
                                                            size="txtRobotoRomanSemiBold13Green500"
                                                        >
                                                            Grade A
                                                        </Text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-end p-2.5 rounded-md w-full">
                                            <div className="flex flex-col items-start justify-start mt-[5px] w-[297px]">
                                                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                                                    <Text
                                                        className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                        size="txtRobotoRomanSemiBold14"
                                                    >
                                                        Health Logs
                                                    </Text>
                                                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                                                        <Text
                                                            className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                            size="txtRobotoRomanRegular13"
                                                        >
                                                            Today, 04:37 pm: Activated
                                                        </Text>
                                                        <Text
                                                            className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                            size="txtRobotoRomanRegular13"
                                                        >
                                                            23 Aug, 02:22 pm: Deactivated
                                                        </Text>
                                                        <Text
                                                            className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                            size="txtRobotoRomanRegular13"
                                                        >
                                                            21 Aug, 05:12 am: Activated
                                                        </Text>
                                                        <Text
                                                            className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                            size="txtRobotoRomanRegular13"
                                                        >
                                                            20 Aug, 02:12 am: Deactivated
                                                        </Text>
                                                        <Text
                                                            className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                                                            size="txtRobotoRomanRegular13"
                                                        >
                                                            19 Aug, 02:12 am: Deactivated
                                                        </Text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
                                    <div className="flex flex-row gap-[18px] items-start justify-between w-full">
                                        <Text
                                            className="text-black-900 text-xl tracking-[0.50px] w-auto"
                                            size="txtRobotoRomanSemiBold20"
                                        >
                                            Recent Recordings
                                        </Text>
                                        <a
                                            href="javascript:"
                                            className="text-base text-gray-800 tracking-[0.50px] underline w-auto"
                                        >
                                            <Text size="txtRobotoRomanSemiBold16">View All</Text>
                                        </a>
                                    </div>
                                    <List
                                        className="sm:flex-col flex-row gap-3 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                                        orientation="horizontal"
                                    >
                                        <div className="border border-gray-300 border-solid flex flex-col gap-2.5 items-start justify-end p-3 rounded w-auto">
                                            <div className="h-[167px] relative w-full">
                                                <Img
                                                    className="h-[167px] m-auto object-cover rounded-[12px] w-full"
                                                    src="images/img_rectangle31_167x230.png"
                                                    alt="rectangleThirtyOne"
                                                />
                                                <Button
                                                    className="absolute flex h-8 inset-[0] items-center justify-center m-auto w-8"
                                                    shape="circle"
                                                    color="white_A700_66"
                                                    size="sm"
                                                    variant="fill"
                                                >
                                                    <Img
                                                        className="h-[18px]"
                                                        src="images/img_overflowmenu.svg"
                                                        alt="overflowmenu"
                                                    />
                                                </Button>
                                            </div>
                                            <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                                                <Text
                                                    className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                    size="txtRobotoRomanSemiBold14"
                                                >
                                                    Recording_0121
                                                </Text>
                                                <Text
                                                    className="text-gray-600 text-xs tracking-[0.10px] w-auto"
                                                    size="txtRobotoRomanRegular12Gray600"
                                                >
                                                    Today, 04:42 pm
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="border border-gray-300 border-solid flex flex-col gap-2.5 items-start justify-end p-3 rounded w-auto">
                                            <div className="h-[167px] relative w-full">
                                                <Img
                                                    className="h-[167px] m-auto object-cover rounded-[12px] w-full"
                                                    src="images/img_rectangle31_1.png"
                                                    alt="rectangleThirtyOne"
                                                />
                                                <Button
                                                    className="absolute flex h-8 inset-[0] items-center justify-center m-auto w-8"
                                                    shape="circle"
                                                    color="white_A700_66"
                                                    size="sm"
                                                    variant="fill"
                                                >
                                                    <Img
                                                        className="h-[18px]"
                                                        src="images/img_overflowmenu.svg"
                                                        alt="overflowmenu"
                                                    />
                                                </Button>
                                            </div>
                                            <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                                                <Text
                                                    className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                    size="txtRobotoRomanSemiBold14"
                                                >
                                                    Recording_0121
                                                </Text>
                                                <Text
                                                    className="text-gray-600 text-xs tracking-[0.10px] w-auto"
                                                    size="txtRobotoRomanRegular12Gray600"
                                                >
                                                    Today, 02:14 pm
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="border border-gray-300 border-solid flex flex-col gap-2.5 items-start justify-end p-3 rounded w-auto">
                                            <div className="h-[167px] relative w-full">
                                                <Img
                                                    className="h-[167px] m-auto object-cover rounded-[12px] w-full"
                                                    src="images/img_rectangle31_2.png"
                                                    alt="rectangleThirtyOne"
                                                />
                                                <Button
                                                    className="absolute flex h-8 inset-[0] items-center justify-center m-auto w-8"
                                                    shape="circle"
                                                    color="white_A700_66"
                                                    size="sm"
                                                    variant="fill"
                                                >
                                                    <Img
                                                        className="h-[18px]"
                                                        src="images/img_overflowmenu.svg"
                                                        alt="overflowmenu"
                                                    />
                                                </Button>
                                            </div>
                                            <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                                                <Text
                                                    className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                    size="txtRobotoRomanSemiBold14"
                                                >
                                                    Recording_0121
                                                </Text>
                                                <Text
                                                    className="text-gray-600 text-xs tracking-[0.10px] w-auto"
                                                    size="txtRobotoRomanRegular12Gray600"
                                                >
                                                    Today, 02:09 pm
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="border border-gray-300 border-solid flex flex-col gap-2.5 items-start justify-end p-3 rounded w-auto">
                                            <div className="h-[167px] relative w-full">
                                                <Img
                                                    className="h-[167px] m-auto object-cover rounded-[12px] w-full"
                                                    src="images/img_rectangle31_167x230.png"
                                                    alt="rectangleThirtyOne"
                                                />
                                                <Button
                                                    className="absolute flex h-8 inset-[0] items-center justify-center m-auto w-8"
                                                    shape="circle"
                                                    color="white_A700_66"
                                                    size="sm"
                                                    variant="fill"
                                                >
                                                    <Img
                                                        className="h-[18px]"
                                                        src="images/img_overflowmenu.svg"
                                                        alt="overflowmenu"
                                                    />
                                                </Button>
                                            </div>
                                            <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                                                <Text
                                                    className="text-gray-900 text-sm tracking-[0.10px] w-auto"
                                                    size="txtRobotoRomanSemiBold14"
                                                >
                                                    Recording_0121
                                                </Text>
                                                <Text
                                                    className="text-gray-600 text-xs tracking-[0.10px] w-auto"
                                                    size="txtRobotoRomanRegular12Gray600"
                                                >
                                                    Today, 01:11 pm
                                                </Text>
                                            </div>
                                        </div>
                                    </List>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pages;
