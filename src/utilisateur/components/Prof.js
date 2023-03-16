import React, {useState} from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";
import "../css/Professeur.css";

function Prof({ prof }) {
  const [profCours, setProfCours] = useState([])

  return (
    <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${prof.id}/places`}>
            <div className="user-item__image">
              <Avatar image={prof.image} alt={prof.nom} />
            </div>
            <div className="user-item__info">
              <h2>{prof.nom}, {prof.prenom}</h2>
              <h5>Id: {prof.id}</h5>
              <h5>{prof.dateEmbauche}</h5>
              <h3>
                {prof.listeCours}
              </h3>
            </div>
          </Link>
        </Card>
        
    </li>
  );
}

export default Prof;
