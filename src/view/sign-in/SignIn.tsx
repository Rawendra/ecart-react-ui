import { FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import { useEffect, useReducer, useState, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialState, reducer, validateForm } from "./SignInHelper";
import { SAGA_EVENTS } from "../../constants/sagaEvents";
import EcartButton from "../../components/button/EcartButton";
import { sign_in_label } from "../../constants/labels";
import "./SignIn.css";
import SignUpFieldElement from "../sign-up/SignUpFieldElement";
import { FIELD_KEYS } from "../sign-up/SignUpHelper";

function SignIn() {
  const [formContent, dispatchForm] = useReducer(reducer, initialState);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (validateForm(formContent)) {
      alert("incomplete form");
      return;
    } else {
      dispatch({
        type: SAGA_EVENTS.SUBMIT_SIGN_IN_FORM,
        name: formContent?.name?.value,
        password: formContent?.password?.value,
      });
    }
  };

  return (
    <div className="sign-in-container">
      <FormControl>
        <FormLabel>{sign_in_label.USERNAME}</FormLabel>
        <SignUpFieldElement
          formContent={formContent}
          dispatchForm={dispatchForm}
          fieldKey={FIELD_KEYS.name}
          fieldType={"name"}
        />
        <SignUpFieldElement
          formContent={formContent}
          dispatchForm={dispatchForm}
          fieldKey={FIELD_KEYS.password}
          fieldType={"password"}
        />
        <EcartButton
          label="Submit"
          handleSubmit={handleSubmit}
          variant="outline"
        />
      </FormControl>
    </div>
  );
}
export default SignIn;
