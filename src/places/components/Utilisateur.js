import React from "react";
import "./Utilisateur.css";

function Utilisateur({utilisateur}) {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
            <img src={utilisateur.image} alt={utilisateur.nom}/>
        </div>
        <div className="user-item__info">
            <h2>{utilisateur.nom}</h2>
            <h3>{utilisateur.places} {utilisateur.places <2 ? "place" :"places"}</h3>
            
        </div>
      </div>
    </li>
  );
}

export default Utilisateur;
