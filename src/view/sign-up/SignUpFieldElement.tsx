import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { validateFormFieldOnBlur } from "./SignUpHelper";
import { sign_in_label } from "../../constants/labels";
function SignUpFieldElement({
  formContent,
  dispatchForm,
  fieldKey,
  fieldType,
}) {
  return (
    <FormControl isInvalid={formContent[fieldKey].hasError}>
      <FormLabel>{sign_in_label[fieldKey]}</FormLabel>
      <Input
        type={fieldType}
        value={formContent[fieldKey].value}
        onBlur={() => validateFormFieldOnBlur(fieldKey, dispatchForm)}
        onChange={(e) =>
          dispatchForm({
            type: "updateField",
            field: {
              fieldName: fieldKey,
              feildDetails: { value: e.target.value },
            },
          })
        }
      />
      <FormErrorMessage>{formContent[fieldKey].errorMessage} </FormErrorMessage>
    </FormControl>
  );
}

export default SignUpFieldElement;
