import React from "react";
import { useParams } from "react-router-dom";
import NouvelEtudiant from "./NouvelEtudiant";
function CoursDetaille({ listeCours, listeProf }) {

  return (
    <div>
        <NouvelEtudiant />
    </div>
    
  );
}

export default CoursDetaille;