import React from "react";
import "../css/ListeProfesseurs.css";
import Prof from "./Prof";
import Card from "../../shared/Card";

function ListeProfs(props) {
  console.log(props)
  if (props.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun professeur</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.profs.map((professeur) => (
        <Prof key={professeur.id} prof={professeur} />
      ))}
    </ul>
  );
}

export default ListeProfs;
