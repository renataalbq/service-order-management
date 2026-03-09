import { TextInputProps } from "react-native";

export type IProps = TextInputProps & {
  label: string;
  error?: string;
};
