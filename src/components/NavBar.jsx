import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navBar__list">
        <li className="navBar__item">
          <NavLink className="navBar__link" to="/">Accueil</NavLink>
        </li>
        <li className="navBar__item">
          <NavLink className="navBar__link" to="/about">A Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
};
