import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export const Card = ({ data }) => {
    const logement = data;
    return (
        <Link to={`/Logement/${logement.id}`} key={logement.id}>
            <div className="card">
                <img className="card__img" src={logement.cover} alt={logement.title} />
                <h2 className="card__title">{logement.title}</h2>
                <div className="card__background"></div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
};


