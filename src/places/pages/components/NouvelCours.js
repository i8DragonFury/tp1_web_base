import React, { useState } from "react";

function NouvelCours({ adresseMethode }) {
  const [entreChoix, setChoix] = useState("");
  const [EntreTitre, setEntreTitre] = useState("");
  const [EntreDiscipline, setEntreDiscipline] = useState("");
  const [EntremMaxEtudiant, setEntremMaxEtudiant] = useState("");
  const [EntreDateDebut, setEntreDateDebut] = useState("");
  const [EntreDateFin, setEntreDateFin] = useState("");

  const minDate = ''
  const maxDate = ''
  
  function ajouterNouvelCoursHandler(event) {
    event.preventDefault();
    const nouvelCours = {
      idProf: entreChoix.toString(),
      titre: EntreTitre,
      discipline: EntreDiscipline,
      maxEtudiant: EntremMaxEtudiant,
      dateDebut: EntreDateDebut,
      dateFin: EntreDateFin,
    };

    if (EntreTitre === "") {
      alert("Veuillez entrer un titre");
    }
    if (EntreDiscipline === "") {
      alert("Veuillez entrer un discipline");
    }
    if (EntremMaxEtudiant === "") {
      alert("Veuillez entrer le nombre max d'etudiant");
    }
    if (EntreDateDebut === "") {
      alert("Veuillez entrer la date de debut");
    } else if (EntreDateDebut < 1){ /*Entre 1er Janvier et 6 Juin*/ 

    }    
    if (EntreDateFin === "") {
      alert("Veuillez entrer la date fin");
    } else if(EntreDateFin > 6){ /*Entre 1er Janvier et 6 Juin*/

    }
    
    adresseMethode(nouvelCours);
    setEntreTitre("");
    setEntreDiscipline("");
    setEntremMaxEtudiant("");
    setEntreDateDebut("");
    setEntreDateFin("");
  }
  function choixHandler(e){
    setChoix(e.target.value)
  }
  function titreHandler(e) {
    setEntreTitre(e.target.value);
  }

  function disciplineHandler(e) {
    setEntreDiscipline(e.target.value);
  }
  function dateDebutHandler(e) {
    setEntreDateDebut(e.target.value);
  }
  function dateFinHandler(e) {
    setEntreDateFin(e.target.value);
  }
  function EntremMaxEtudiantHandler(event) {
    setEntremMaxEtudiant(event.target.value);
  }

  return (
    <form onSubmit={ajouterNouvelCoursHandler}>
      <input type="number" value={entreChoix} onChange={choixHandler}/> Choix du prof {" "} <br/>
      <input type="text" value={EntreTitre} onChange={titreHandler} /> Titre{" "}
      <br />
      <input
        type="text"
        value={EntreDiscipline}
        onChange={disciplineHandler}
      />{" "}
      Discipline <br />
      <input
        type="number"
        value={EntremMaxEtudiant}
        onChange={EntremMaxEtudiantHandler}
      />{" "}
      Nombre maximal d'etudiant <br />
      <input
        type="date"
        value={EntreDateDebut}
        onChange={dateDebutHandler}
      />{" "}
      Date Debut <br />
      <input type="date" value={EntreDateFin} onChange={dateFinHandler} /> Date
      fin <br />
      <button type="submit">Soumettre cours</button>
    </form>
  );
}

export default NouvelCours;
