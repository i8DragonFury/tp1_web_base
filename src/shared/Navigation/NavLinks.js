import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Accueil</NavLink>
    </li>
    <li>
      <NavLink to="/ListeProfs">Professeurs</NavLink>
    </li>
    <li>
      <NavLink to="/ListeCours">Cours</NavLink>
    </li>
  </ul>
};

export default NavLinks;