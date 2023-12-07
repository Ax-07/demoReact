import PropTypes from 'prop-types';

export const Host = ({logement}) => {
    const host = logement.host;
    return (
        <div className='logement__host host'>
            <div className='host__name'>{host.name}</div>
            <img className='host__picture' src={host.picture} alt={host.name} />
        </div>
    );
};

Host.propTypes = {
    logement: PropTypes.object.isRequired,
};