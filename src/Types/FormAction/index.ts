import { Input } from "../Input";

export type FormAction =
  | {
      type: "INPUT_CHANGE";
      value: string;
      isValid: boolean;
      inputId: string;
    }
  | {
      type: "SET_DATA";
      inputs: { [inputId: string]: Input };
      formIsValid: boolean;
    };