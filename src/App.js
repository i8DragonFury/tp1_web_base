import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
import logo from "./assets/logomo.png";
import Profs from "./utilisateur/pages/Profs";
import AppCours from "./places/pages/AppCours";
import NouvelProf from "./utilisateur/components/NouvelProf";
import ListeProfs from "./utilisateur/components/ListeProfs";
import CoursProfs from "./utilisateur/CoursProf";
import Etudiants from "./places/pages/Etudiants";
function App() {
  
  const [listeProfs, setListeProfs] = useState(Profs)
  const [cours, setCours] = useState([
    { idProf:"0",titre: "Web et Base", discipline: "Visual Studio Code", maxEtudiant: "18", dateDebut: "1er janvier", dateFin: "6 juin", etudiants: []},
    { idProf:"0",titre: "Structure de donnee", discipline: "Java Script", maxEtudiant: "20", dateDebut: "25 aout", dateFin: "21 decembre", etudiants: []},
    { idProf:"1",titre: "Objet connecter", discipline: "Visual Studio Code", maxEtudiant: "20", dateDebut: "1er janvier", dateFin: "6 juin", etudiants: [] },
  ]);

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <div>
              <img src={logo} alt='montmo' /> 
              <p className="desc">
              Seul cégep à Laval. 5 programmes préuniversitaires, 23 programmes techniques dont plusieurs en alternance travail-études. À deux pas du métro Montmorency.

              </p>
              <p className="desc">
              Dans le menu de navigation vous allez retrouver trois pages. La page d'accueil qui vous dirigera vers cette 
              page. Ensuite la page Professeurs qui contient la liste des profs en plus d'un formulaire pour l’embauche d’un 
              professeur. Finalement la page Cours qui contient  la liste de cours deja offerts et offre une autre formulaire 
              qui permet d’ajouter un cours la liste. Chaque cours a un page expliquant les details du cours puis encore un formulaire 
              pour ajouter un etudiant au cours.
              </p>

              <p className="desc">
              Bonne Etude!
              </p>
            </div>
          </Route>
          <Route path="/ListeProfs" exact>
            <ListeProfs profs={listeProfs}/>
            <NouvelProf setProf={setListeProfs} profs={listeProfs}/>
          </Route>
          <Route path="/ListeCours" exact>
            <AppCours cours={cours} setCours={setCours}/>
          </Route>
          <Route path="/:id/places">
            <CoursProfs listeCours={cours}/>
          </Route>
          <Route path="/ListeCours/:titre"> {/*Cours detaille*/}
            <Etudiants/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
