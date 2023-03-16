import React from "react";
import { useParams } from "react-router-dom";
import Cours from "../places/pages/Cours";
function CoursProfs({ listeCours }) {
  const idProf = useParams().id;

  const coursCourant = listeCours.filter((cours) => cours.idProf === idProf);
  return (
    <ul className="cours-list">
      {coursCourant.map((cour) => (
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

export default CoursProfs;
