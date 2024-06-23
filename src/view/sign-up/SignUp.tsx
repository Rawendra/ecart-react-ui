import { FormControl } from "@chakra-ui/react";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialState, reducer, FIELD_KEYS } from "./SignUpHelper";
import EcartButton from "../../components/button/EcartButton";

import { SAGA_EVENTS } from "../../constants/sagaEvents";
import SignUpFieldElement from "./SignUpFieldElement";

import "./SignUp.css";
function SignUp() {
  const [formContent, dispatchForm] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    //validateForm({ formContent, dispatchForm });
    dispatch({ type: SAGA_EVENTS.SUBMIT_SIGN_UP_FORM, formContent });
  };

  return (
    <>
      {" "}

      <div className="sign-in-container">

        <FormControl>
          <SignUpFieldElement
            formContent={formContent}
            dispatchForm={dispatchForm}
            fieldKey={FIELD_KEYS.name}
            fieldType={"name"}
          />
          <SignUpFieldElement
            formContent={formContent}
            dispatchForm={dispatchForm}
            fieldKey={FIELD_KEYS.email}
            fieldType={"email"}
          />
          <SignUpFieldElement
            formContent={formContent}
            dispatchForm={dispatchForm}
            fieldKey={FIELD_KEYS.password}
            fieldType={"password"}
          />
          <SignUpFieldElement
            formContent={formContent}
            dispatchForm={dispatchForm}
            fieldKey={FIELD_KEYS.confirmPassword}
            fieldType={"password"}
          />

          <EcartButton
            label="Submit"
            disabled={formContent.submitBtnDisable}
            handleSubmit={handleSubmit}
            variant="outline"
          />
                <span>ATTENTION!! this is ongoing feature, not complete yet</span>
        </FormControl>
      </div>
    </>
  );
}

export default SignUp;
