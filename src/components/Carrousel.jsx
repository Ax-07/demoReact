import PropTypes from "prop-types";
import left_arrow from "../assets/icons/left_arrow.svg";
import right_arrow from "../assets/icons/right_arrow.svg";
import { useState } from "react";

export const Carrousel = ({ logement }) => {
  const [index, setIndex] = useState(0);
  const pictures = logement.pictures;
  console.log(pictures);
  console.log(index);
  const nextPicture = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const previousPicture = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="carrousel">
      <div className="carrousel__mask"></div>
      <img className="carrousel__img" src={pictures[index]} alt="" />
      {pictures.length > 1 ? (
        <>
          <span className="carrousel__index">
            {index + 1}/{pictures.length}
          </span>
          <div
            className="carrousel__arrow carrousel__arrow-left"
            onClick={previousPicture}
          >
            <img src={left_arrow} alt="" />
          </div>
          <div
            className="carrousel__arrow carrousel__arrow-right"
            onClick={nextPicture}
          >
            <img src={right_arrow} alt="" />
          </div>
        </>
      ) : null}
    </div>
  );
};

Carrousel.propTypes = {
  logement: PropTypes.object.isRequired,
};
