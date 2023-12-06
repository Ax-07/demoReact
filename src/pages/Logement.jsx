import { useParams } from "react-router-dom";
import { LogementsContext } from "../contexts/logementsContext.jsx";
import { useContext } from "react";
import { Carrousel } from "../components/Carrousel.jsx";
import { Tags } from "../components/Tags.jsx";
import { Host } from "../components/Host.jsx";
import { Rating } from "../components/Rating.jsx";
import { DropDown } from "../components/DropDown.jsx";

export const Logement = () => {
    const logementId = useParams(); console.log(logementId);
    const logements = useContext(LogementsContext);

    const logement = logements[0].filter((logement) => {
        if (logement.id === logementId.id) return logement;
    })[0];
    console.log('logement: ', logement);
    
    return (
        <div className="logement">
            <Carrousel logement={logement} />
            <h1 className="logement__title">{logement.title}</h1>
            <p className="logement__location">{logement.location}</p>
            <Tags logement={logement} />
            <Host logement={logement} />
            <Rating logement={logement} />
            
            <div className="logement__details">
                <DropDown title={"Description"}>
                    <p className="dropDown__description">{logement.description}</p>
                </DropDown>
                <DropDown title={"Equipements"}>
                    <ul className="dropDown__list">
                        {logement.equipments.map((equipment, index) => {
                            return (
                                <li key={index} className="dropDown__item">
                                    {equipment}
                                </li>
                            );
                        })}
                    </ul>
                </DropDown>
            </div>
        </div>
    );
};
