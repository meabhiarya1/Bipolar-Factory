import React from "react";

import { Button, Img, Text } from "components";
import Home from "pages/Home";

const CardsPage = () => {
  return (
    <>
    <Home/>
      <div className="bg-gray-300_01 flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-10 md:gap-10 gap-[253px] items-center justify-start mx-auto p-[285px] md:px-10 sm:px-5 w-full">
        <div className="md:h-[410px] h-[412px] relative w-[37%] md:w-full">
          <Text
            className="ml-[71px] mt-10 text-black-900_99 text-xs tracking-[0.40px]"
            size="txtRobotoRomanMedium12"
          >
            Manage
          </Text>
          <div className="absolute bg-gray-50_01 flex flex-col gap-3.5 h-full inset-[0] items-center justify-center m-auto pb-[13px] rounded-[12px] shadow-bs w-full">
            <div className="h-60 relative w-full">
              <Img
                className="h-60 m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                src="images/img_rectangle31_240x340.png"
                alt="rectangleThirtyOne"
              />
              <div className="absolute border-2 border-green-A700_dd border-solid flex flex-col h-20 inset-x-[0] items-start justify-end mx-auto top-[5%] w-20">
                <Text
                  className="bg-green-A400_e5 justify-center px-1.5 rounded-br text-[6px] text-white-A700 tracking-[0.10px] w-auto"
                  size="txtRobotoRomanBold6"
                >
                  Praveen Kumar
                </Text>
                <Text
                  className="bg-green-500_e5 justify-center px-1.5 rounded-br text-[6px] text-white-A700 tracking-[0.10px] w-auto"
                  size="txtRobotoRomanBold6"
                >
                  Manager
                </Text>
                <Text
                  className="bg-blue-900_e5 justify-center mt-11 px-1.5 text-[6px] text-white-A700 tracking-[0.10px] w-auto"
                  size="txtRobotoRomanBold6"
                >
                  In Time: 2:42:21 PM
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-[291px]">
              <Text
                className="text-base text-black-900 tracking-[0.10px] w-auto"
                size="txtRobotoMedium16"
              >
                Bank Entrance-front-view Camera1
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_carbontasktools.svg"
                    alt="carbontasktools"
                  />
                  <Text
                    className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                    size="txtRobotoRomanRegular13"
                  >
                    3 Recipes Added
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fluentclipboar.svg"
                    alt="fluentclipboar"
                  />
                  <Text
                    className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                    size="txtRobotoRomanRegular13"
                  >
                    today, 04:45pm: Unidentified face detected
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_tdesignlocation.svg"
                    alt="tdesignlocation"
                  />
                  <Text
                    className="text-[13px] text-gray-600 tracking-[0.10px] w-auto"
                    size="txtRobotoRomanRegular13"
                  >
                    Coimbatore branch
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-start justify-between w-full">
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[53px] rounded text-center text-xs tracking-[0.50px]"
                  shape="round"
                  color="green_A700_dd"
                  size="xs"
                  variant="fill"
                >
                  Active
                </Button>
                <Img
                  className="h-6 w-[92px]"
                  src="images/img_frame1087112.svg"
                  alt="frame1087112"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[140px] justify-end p-3.5 md:px-5 w-[37%] md:w-full"
          style={{ backgroundImage: "url('images/img_recipecard.svg')" }}
        >
          <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[9px] mr-[89px] mt-[5px] w-[69%] md:w-full">
            <Img
              className="h-12 w-12"
              src="images/img_fluentclipboar_gray_900.svg"
              alt="fluentclipboar_One"
            />
            <Text
              className="text-2xl md:text-[22px] text-gray-700 sm:text-xl"
              size="txtRobotoRomanRegular24"
            >
              Recipe Management
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[254px] mr-[18px] text-black-900_99 text-xs tracking-[0.40px]"
            size="txtRobotoRomanMedium12"
          >
            Manage
          </Text>
        </div>
      </div>
    </>
  );
};

export default CardsPage;
