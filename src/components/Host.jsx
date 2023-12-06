import PropTypes from 'prop-types';

export const Host = ({logement}) => {
    const host = logement.host;
    return (
        <div className='logement__host host'>
            <div className='host__name'>{host.name}</div>
            <div >
                <img className='host__picture' src={host.picture} alt={host.name} />
            </div>
        </div>
    );
};

Host.propTypes = {
    logement: PropTypes.object.isRequired,
};