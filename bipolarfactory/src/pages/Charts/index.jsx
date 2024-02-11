import React from "react";

// import { CircularProgressbar } from "react-circular-progressbar";
// import { Button, Img, Input, List, Text } from "components";

import ChartsHealthgraph from "components/ChartsHealthgraph";
import Home from "pages/Home";

import "react-circular-progressbar/dist/styles.css";

const ChartsPage = () => {
  return (
    <>
      <Home />
      <div className="bg-gray-300_01 flex flex-col font-roboto items-center justify-center mx-auto p-[218px] md:px-10 sm:px-5 w-full">
        <ChartsHealthgraph className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2.5 items-start justify-start max-w-[1076px] mx-auto my-[135px] md:px-5 px-6 py-5 rounded-[12px] w-full" />
      </div>
    </>
  );
};

export default ChartsPage;
