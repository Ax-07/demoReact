import { HeroBanner } from "../components/HeroBanner";
import heroImg from "../assets/images/b9995860bb6384a77ca7dc9bf52da3be.jpg";
import { useState } from "react";
import { getAllData } from "../services/api/logementApi";
import { useEffect } from "react";
import { DropDown } from "../components/DropDown";

export const About = () => {
  const [valeur, setValeur] = useState([]);

  useEffect(() => {
    getAllData("../src/db/valeur.json")
      .then((data) => {
        setValeur(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(valeur);

  return (
    <>
      <HeroBanner src="about" heroTitle="" heroImg={heroImg} />
      <div className="valeur">
        {valeur &&
          valeur.map((valeur, index) => {
            return (
              <div key={index}>
                <DropDown className="dropDown--lg" title={valeur.title}>
                  <p className="dropDown__description">{valeur.description}</p>
                </DropDown>
              </div>
            );
          })}
      </div>
    </>
  );
};
