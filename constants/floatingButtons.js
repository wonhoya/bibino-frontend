import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { PRIMARY_ORANGE, PRIMARY_BLACK } from "./colors";

const floatingButtons = [
  {
    icon: <AntDesign name="form" size={19} color={PRIMARY_BLACK} />,
    name: "reviewButton",
    position: 2,
    color: PRIMARY_ORANGE,
  },
  {
    icon: <AntDesign name="sharealt" size={20} color={PRIMARY_BLACK} />,
    name: "shareButton",
    position: 1,
    color: PRIMARY_ORANGE,
  },
];

export default floatingButtons;
