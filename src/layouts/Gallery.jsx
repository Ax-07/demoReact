import { Card } from "../components/Card.jsx";
import { useContext } from "react";
import { LogementsContext } from "../contexts/logementsContext.jsx";

export const Gallery = () => {
  const logements = useContext(LogementsContext);
    
  return (
    <section className="gallery">
      {logements &&
        logements.map((logement) => (
            <div className="gallery__item" key={logement.id}>
                <Card data={logement}/>
            </div>
        ))}
    </section>
  );
};
