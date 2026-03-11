import React from "react";
import { IProps } from "./detail-row.types";
import { DetailRowView } from "./detail-row.view";

export const DetailRow: React.FC<IProps> = (props) => {
  return (
    <DetailRowView
      {...props}
    />
  );
};
