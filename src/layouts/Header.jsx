import { NavBar } from "../components/NavBar";
import logo from "../assets/images/LOGO.svg";

export const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <NavBar className="header__nav" />
    </div>
  );
};
