import React from "react";
import Card from "../../../shared/Card";
import "'./Place.css";

function Place({ place }) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={place.image} alt={place.titre} />
        </div>
        <div className="place-item__info">
          <h2> {place.titre}</h2>
          <h3>{place.adresse}</h3>
          <p>{place.description}</p>
        </div>
        <div className="place-item__actions">
          <button> Voir sur la carte </button>
          <button> Éditer </button>
          <button> Supprimer </button>
        </div>
      </Card>
    </li>
  );
}

export default Place;
