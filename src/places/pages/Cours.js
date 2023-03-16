import React from "react";
import {Link } from "react-router-dom";

import ListeCours from "./css/ListeCours.css";

function Cours({titre, discipline, maxEtudiant, dateDebut, dateFin}){
  function clicCoursHandler(cours){

  }
    return(
      <Link to={`/${titre}/Cours`}>
          <div>
          <li key={titre} onClick={() => clicCoursHandler(titre)}>
            {titre} <br />
            Discipline : {discipline} <br />
            nombre maximal d'étudiants : {maxEtudiant} <br />
            Date du debut : {dateDebut} <br />
            Date du fin : {dateFin}
          </li>
        </div>
      </Link>
    )
}

export default Cours