import PropTypes from 'prop-types';

export const HeroBanner = ({heroTitle, heroImg, src}) => {
  return (
    <section className="hero-banner">
      <div className={`hero-banner__img hero-banner__img-${src}`} style={{backgroundImage: `url(${heroImg})`}}></div>
      <h1 className="hero-banner__title">{heroTitle}</h1>
      <div className="hero-banner__mask"></div>
    </section>
  );
};

HeroBanner.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  heroImg: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
