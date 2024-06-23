import { Action } from "redux";
export interface fieldType {
  value: string;
  hasError?: boolean;
  errorMessage?: string;
}
export interface ActionSignUp extends Action {
  name?: string;
  password?: string;
  confirmPassword?: string;
  label?: string;
  field?: { fieldName: string; feildDetails: fieldType };
}
export interface InitialStateSignUp {
  submitBtnDisable: boolean;
  hasError?: boolean;
  name: fieldType;
  password: fieldType;
  confirmPassword: fieldType;
  email: fieldType;
}
