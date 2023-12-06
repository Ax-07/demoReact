import PropTypes from "prop-types";
import arrow from "../assets/icons/arrow_back_ios-24px 2.svg";
import { useState } from "react";

export const DropDown = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`dropDown ${isOpen ? "dropDown--open" : ""}`}>
      <div className="dropDown__topBar">
        <h2 className="dropDown__title">{title}</h2>
        <span className="dropDown__btn" onClick={toggle}>
          <img src={arrow} alt="arrow" />
        </span>
      </div>
      <div className="dropDown__content">{children}</div>
    </div>
  );
};

DropDown.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
