import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import FormsColumnstrokeTwo from "components/FormsColumnstrokeTwo";

const FormsPage = () => {
  return (
    <>
      <div className="bg-gray-300_01 flex flex-col font-roboto items-center justify-start mx-auto p-[141px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start rounded-[16px] shadow-bs1 w-auto md:w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start pb-[90px] pt-[60px] md:px-10 sm:px-5 px-[72px] rounded-[16px] w-auto md:w-full">
            <div className="flex flex-col gap-9 items-center justify-start w-auto sm:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtRobotoRomanBold40"
              >
                XYZ
              </Text>
              <div className="flex flex-col gap-9 items-center justify-start w-full">
                <div className="flex flex-col items-end justify-start w-[458px] sm:w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[458px] sm:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                      size="txtRobotoRomanRegular36"
                    >
                      Welcome Onboard
                    </Text>
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col h-[57px] md:h-auto items-start justify-start rounded-tl rounded-tr w-full">
                          <Input
                            name="textfield"
                            placeholder="Your Name"
                            className="!placeholder:text-gray-900_01 !text-gray-900_01 p-0 text-base text-left tracking-[0.50px] w-full"
                            wrapClassName="w-full"
                            type="text"
                            shape="round"
                            size="sm"
                          ></Input>
                          <Line className="bg-gray-900_01 h-px w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col h-[57px] md:h-auto items-start justify-start rounded-tl rounded-tr w-full">
                          <Input
                            name="textfield_One"
                            placeholder="Company Name"
                            className="!placeholder:text-gray-900_01 !text-gray-900_01 p-0 text-base text-left tracking-[0.50px] w-full"
                            wrapClassName="w-full"
                            type="text"
                            shape="round"
                            size="sm"
                          ></Input>
                          <Line className="bg-gray-900_01 h-px w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <FormsColumnstrokeTwo className="flex flex-col h-[57px] md:h-auto items-start justify-start rounded-tl rounded-tr w-full" />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <Text
                          className="text-base text-gray-900_01 tracking-[0.50px] w-auto"
                          size="txtRobotoRomanMedium16"
                        >
                          Select Number of Locations
                        </Text>
                        <div className="flex flex-row gap-3 items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-semibold min-w-[80px] rounded text-base text-center tracking-[0.50px]"
                            shape="round"
                            color="deep_purple_50"
                            size="md"
                            variant="fill"
                          >
                            1-10
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[80px] rounded text-base text-center tracking-[0.50px]"
                            shape="round"
                            color="deep_purple_50"
                            size="md"
                            variant="fill"
                          >
                            10-50
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[80px] rounded text-base text-center tracking-[0.50px]"
                            shape="round"
                            color="gray_900"
                            size="md"
                            variant="fill"
                          >
                            50-150
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[80px] rounded text-base text-center tracking-[0.50px]"
                            shape="round"
                            color="deep_purple_50"
                            size="md"
                            variant="fill"
                          >
                            150+
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium rounded-lg text-center text-lg tracking-[0.10px] w-full"
                  shape="round"
                  color="blue_gray_900"
                  size="lg"
                  variant="fill"
                >
                  CONTINUE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormsPage;
