import React from "react";
import { IProps } from "./header.types";
import { HeaderView } from "./header.view";

export const Header: React.FC<IProps> = (props) => {
  return (
    <HeaderView
      {...props}
    />
  );
};
