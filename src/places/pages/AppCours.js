import React, { useState } from "react";

import ListeCours from "./components/ListeCours";
import NouvelCours from "./components/NouvelCours";
import "./css/AppCours.css";

function AppCours({cours,setCours}) {
  function ajouterCours(nouvelcours) {
    setCours(cours.concat(nouvelcours));
    console.log(cours);
  }

  return (
    
      <div className="course-goals">
        <h2>Listes des cours a Montmorency</h2>
        <ListeCours cours={cours} />
        <NouvelCours adresseMethode={ajouterCours} />
      </div>
    
    
  );
}

export default AppCours;