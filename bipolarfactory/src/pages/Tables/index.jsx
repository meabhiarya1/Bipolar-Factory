import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, ReactTable, Text } from "components";
import Home from "pages/Home";

const TablesPage = () => {
  const tableData = React.useRef([
    {
      rowname: "Sep 13, 2023 5:51 PM",
      rowpermissions: "Active",
      action: "images/img_card.svg",
    },
    {
      rowname: "Today, 2023 2:11 PM",
      rowpermissions: "Active",
      action: "images/img_card.svg",
    },
    {
      rowname: "Sep 13, 2023 5:51 PM",
      rowpermissions: "Active",
      action: "images/img_card.svg",
    },
    {
      rowname: "Sep 13, 2023 5:51 PM",
      rowpermissions: "Active",
      action: "images/img_card.svg",
    },
    {
      rowname: "Sep 13, 2023 5:51 PM",
      rowpermissions: "Inactive",
      action: "images/img_card.svg",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowname", {
        cell: (info) => (
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end p-2.5">
            <Text
              className="text-[13px] text-gray-900_02 tracking-[-1.00px]"
              size="txtNotoSansMedium13"
            >
              Peter John
            </Text>
            <Text
              className="md:ml-[0] ml-[52px] text-[13px] text-gray-900_02 tracking-[-1.00px]"
              size="txtNotoSansMedium13"
            >
              Peter@gmail.com
            </Text>
            <Text
              className="md:ml-[0] ml-[51px] text-[13px] text-gray-900_02 tracking-[-1.00px]"
              size="txtNotoSansMedium13"
            >
              Owner
            </Text>
            <div className="flex flex-col gap-[5px] items-start justify-end mb-[3px] md:ml-[0] ml-[31px] p-1">
              <Text
                className="md:ml-[0] ml-[34px] mt-[5px] text-[13px] text-gray-900_02 tracking-[-1.00px]"
                size="txtNotoSansMedium13"
              >
                Adam Stall
              </Text>
              <Text
                className="md:ml-[0] ml-[34px] text-[11px] text-gray-900_02 tracking-[-1.00px]"
                size="txtNotoSansRegular11"
              >
                Coimbatore
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[17px] mr-[23px] text-[13px] text-gray-900_02 tracking-[-1.00px]"
              size="txtNotoSansMedium13"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-end min-w-[665px] p-[13px]">
            <Text
              className="text-gray-600_01 text-sm tracking-[-0.50px]"
              size="txtNotoSansSemiBold14"
            >
              Name
            </Text>
            <Text
              className="text-gray-600_01 text-sm tracking-[-0.50px]"
              size="txtNotoSansSemiBold14"
            >
              Email
            </Text>
            <Text
              className="text-gray-600_01 text-sm tracking-[-0.50px]"
              size="txtNotoSansSemiBold14"
            >
              Role
            </Text>
            <Text
              className="text-gray-600_01 text-sm tracking-[-0.50px]"
              size="txtNotoSansSemiBold14"
            >
              Locations
            </Text>
            <Text
              className="text-gray-600_01 text-sm tracking-[-0.50px]"
              size="txtNotoSansSemiBold14"
            >
              Last Active
            </Text>
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowpermissions", {
        cell: (info) => (
          <div className="flex flex-row gap-[21px] items-center justify-center pr-1.5 py-1.5">
            <Text
              className="text-[13px] text-gray-900_02 tracking-[-1.00px]"
              size="txtNotoSansMedium13"
            >
              All Permissions
            </Text>
            <div className="h-[30px] md:h-[53px] mb-[17px] mt-3.5 p-1 relative w-[55%]">
              <div className="bg-green-500 h-[22px] m-auto rounded w-[43%]"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-[10px] text-white-A700 tracking-[-1.00px] w-max"
                size="txtNotoSansMedium10"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[66px] items-center justify-center min-w-[231px] p-[3px]">
            <Text
              className="my-2.5 text-gray-600_01 text-sm tracking-[-0.50px]"
              size="txtNotoSansSemiBold14"
            >
              Permissions
            </Text>
            <Text
              className="my-2.5 text-gray-600_01 text-sm tracking-[-0.50px]"
              size="txtNotoSansSemiBold14"
            >
              Status
            </Text>
          </div>
        ),
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-4 py-4">
            <Img
              className="h-8 mb-1.5 mt-[3px]"
              alt="card"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[139px] sm:px-5 px-[35px] py-[13px] text-center text-gray-600_01 text-sm tracking-[-0.50px]"
            size="txtNotoSansSemiBold14"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
    <Home/>
      <div className="bg-gray-300_01 flex flex-col font-notosans items-center justify-center mx-auto p-[238px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1035px] mx-auto my-[23px] w-full">
          <div className="overflow-auto bg-white-A700 outline outline-[2px] outline-blue_gray-50 rounded-[12px] w-full">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass="bg-gray-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TablesPage;
