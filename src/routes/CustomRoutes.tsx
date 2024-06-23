import { Route, Routes } from "react-router-dom";
import LandingPage from "../view/landing-page/LandingPage";
import { pages } from "../constants/routes";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CustomRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = true;

  useEffect(() => {
    const shouldRedirect = location.pathname !== "/" && !isAuthenticated;
    if (shouldRedirect) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {" "}
      <Routes>
        {pages.map(({ Component, route, isAuthNeeded }) => {
          if (isAuthNeeded && isAuthenticated) {
            return <Route key={route} path={route} element={<Component />} />;
          } else {
            return <Route key={route} path={route} element={<Component />} />;
          }
        })}

        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default CustomRoutes;
