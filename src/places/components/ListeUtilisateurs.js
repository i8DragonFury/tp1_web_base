import React from "react";
import "./ListeUtilisateurs.css";
import Utilisateur from "./Utilisateur";

function ListeUtilisateurs(props) {
  if (props.utilisateurs.length === 0) {
    return (
      <div className="center">
        <h2>Aucun utilisateur</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.utilisateurs.map((utilisateur) => (
        <Utilisateur key={utilisateur.id} utilisateur={utilisateur} />
      ))}
    </ul>
  );
}

export default ListeUtilisateurs;
