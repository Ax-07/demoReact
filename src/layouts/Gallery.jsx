import { useState, useEffect } from "react";
import { getAllData } from "../services/api/logementApi.js";
import { Card } from "../components/Card.jsx";

export const Gallery = () => {
    const [ logements, setLogements ] = useState([]);

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
