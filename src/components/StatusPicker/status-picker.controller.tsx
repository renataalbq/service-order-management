import React from "react";
import { IProps } from "./status-picker.types";
import { StatusPickerView } from "./status-picker.view";

export const StatusPicker: React.FC<IProps> = (props) => {
  const { value, onChange } = props;

  return (
    <StatusPickerView
      {...props}
      value={value} 
      onChange={onChange}    
    />
  );
};
