import { useState, createContext, useEffect } from "react";
import { getAllData } from "../services/api/logementApi.js";
import PropTypes from "prop-types";

export const LogementsContext = createContext();

export const LogementsProvider = ({ children }) => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        getAllData()
            .then((data) => {
                setLogements(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(logements);
    return (
        <LogementsContext.Provider value={[logements]}>
            {children}
        </LogementsContext.Provider>
    );
}

LogementsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};