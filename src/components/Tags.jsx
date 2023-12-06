import PropTypes from 'prop-types';

export const Tags = ({logement}) => {
    const tags = logement.tags;
    return (
        <div className="tags">
            {tags.map(tag => (
                <span className="tags__item" key={tag}>{tag}</span>
            ))}
        </div>
    );
};

Tags.propTypes = {
    logement: PropTypes.object.isRequired,
};