import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ROUTES } from "../../constants/routes";
import "./LandingPage.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/')
  },[])
  return (
    <div className="landing-page-container">
      LandingPage
      <ChakraLink as={ReactRouterLink} to={ROUTES.SIGN_UP}>
        you can sign up with us
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to={ROUTES.SIGN_IN}>
        you can sign in, if you're aleady an user
      </ChakraLink>
    </div>
  );
}

export default LandingPage;
