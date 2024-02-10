import React from "react";

import { Input } from "components";

export default {
  title: "abhishek_s_application1/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "CustomBorderTL4",
  variant: "edittext0",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
