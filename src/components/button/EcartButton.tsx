import { Button } from "@chakra-ui/react";
import { EcartButtonProps } from "../../typeDef/EcartButtonProps";
import "./EcartButton.css";
function EcartButton({
  label = "label",
  disabled = false,
  variant = "solid",
  handleSubmit,
}: EcartButtonProps) {
  return (
    <button disabled={disabled} onClick={handleSubmit} className="btn">
      {label}
    </button>
  );
}
{
  /* <Button
        colorScheme="teal"
        size="md"
        variant={variant}
        onClick={handleSubmit}
      >
        {label}
      </Button> */
}

export default EcartButton;
