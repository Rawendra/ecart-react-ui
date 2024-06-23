import { Reducer } from "react";
import {
  ActionSignUp,
  InitialStateSignUp,
  fieldType,
} from "../../typeDef/reducerTypes";
import { sign_in_label } from "../../constants/labels";

export const FIELD_KEYS = {
  name: "name",
  password: "password",
  confirmPassword: "confirmPassword",
  email:'email',

};

export const initialState: InitialStateSignUp = {
  hasError: false,
  submitBtnDisable:false,
  name: { value: "", hasError: false, errorMessage: "" },
  password: { value: "", hasError: false, errorMessage: "" },
  confirmPassword: { value: "", hasError: false, errorMessage: "" },
  email: { value: "", hasError: false, errorMessage: "" },
  submitBtnDisable: false,
};
export const validateFormField = ({
  field,
  label,
}: {
  field: fieldType;
  label: string;
}) => {
  if (!field.value) {
    field.hasError = true;
    field.errorMessage = `${sign_in_label[label]} is required`;
  }
  return field;
};
export const reducer: Reducer<InitialStateSignUp, ActionSignUp> = (
  state: InitialStateSignUp,
  action: ActionSignUp
) => {
  switch (action.type) {
    case "validateFormField":
      if (!action.label) {
        return state;
      }
      const field = validateFormField({
        field: state[action.label],
        label: action.label,
      });

      return { ...state, ...field };
    case "updateField":
      
      if (action.field?.fieldName) {
        return {
          ...state,
          [action.field.fieldName]: action.field.feildDetails,
        };
      }
      return state;

    case "updateName":
      return { ...state, name: { value: action.name } };
    case "updatePassword":
      return { ...state, password: { value: action.password } };
    case "updateConfirmPassword":
      return { ...state, confirmPassword: { value: action.confirmPassword } };
    case "reset":
      state.name.value = "";
      state.password.value = "";
      state.confirmPassword.value = "";
      return state;

    default:
      return state;
  }
};

export const validateForm = ({ formContent, dispatchForm }) => {
  if (formContent?.confirmPassword?.value !== formContent?.password?.value) {
    dispatchForm();
  }
  return false;
};
export const validateFormFieldOnBlur = (
  label: string,
  dispatchForm: (props: { type: string; label: string }) => void
) => {
  dispatchForm({ type: "validateFormField", label });
};

export const signUpValidator = () => {};
