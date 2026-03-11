import React from "react";
import { FormFieldView } from "./form-field.view";
import { IProps } from "./form-field.types";

export const FormField: React.FC<IProps> = (props) => {
  return (
    <FormFieldView
      {...props}
    />
  )

}
