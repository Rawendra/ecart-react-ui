import "./Header.css";
import { Link } from "react-router-dom";
import { pages } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../../store/selectors/loginSelectors";

function DisplayLink({ page }) {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const handleClick = () => {
    console.log("page", page);
  };
  const link = (
    <div
      key={page.route}
      className="header-container-item"
      onClick={() => handleClick()}
    >
      <Link to={page.route}> {page.title}</Link>
    </div>
  );

  return page.isAuthNeeded ? (isAuthenticated ? link : null) : link;
}

function Header() {
  return (
    <div className="header-container">
      {pages.map((page) => (
        <DisplayLink key={page.route} page={page} />
      ))}
    </div>
  );
}
export default Header;
