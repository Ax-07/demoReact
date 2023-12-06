import PropTypes from 'prop-types';

export const Rating = ({ logement }) => {
  const rate = logement.rating;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`rating__item ${i < rate ? 'rating__item--rated' : ''}`}>
      </span>
    );
  }

  return <div className="logement__rating rating">{stars}</div>;
};

Rating.propTypes = {
  logement: PropTypes.object.isRequired,
};