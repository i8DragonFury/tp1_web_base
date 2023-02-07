import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import Utilisateurs from './utilisateur/pages/Utilisateurs';
import NouvellePlace from './places/pages/NouvellePage';

function App() {
  return <Router>
    <Switch>
    <Route path="/" exact>
      <Utilisateurs/ >
    </Route>
    <Route path="/places/nouvelle" exact>
      <NouvellePlace/ >
    </Route>
    <Redirect to="/"/>
    </Switch>
  </Router>
  
}

export default App;
