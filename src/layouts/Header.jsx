import { NavBar } from "../components/NavBar";
import logo from "../assets/images/LOGO.svg";

export const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" />
            </div>
            <NavBar className="header__nav"/>
        </div>
    );
};
