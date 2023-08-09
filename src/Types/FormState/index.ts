import { Input } from "../Input";

export type FormState = {
    inputs: { [inputId: string]: Input };
    isValid: boolean;
};
  