import React from "react";
import Cours from "../Cours";

import "../css/ListeCours.css";

function ListeCours({ cours }) {
  console.log(cours);
  return (
    <ul className="cours-list">
      {cours.map((cour) => (
        <Cours
          titre={cour.titre}
          discipline={cour.discipline}
          maxEtudiant={cour.maxEtudiant}
          dateDebut={cour.dateDebut}
          dateFin={cour.dateFin}
        />
      ))}
    </ul>
  );
}

export default ListeCours;