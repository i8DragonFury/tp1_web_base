import React, { useState } from "react";

function NouvelEtudiant({ adresseMethode }) {
  const [entreNom, setNom] = useState("");
  const [EntrePrenom, setPrenom] = useState("");
  const [EntreNbr, setNbr] = useState("");

  function ajouterNouvelEtudiantHandler(event) {
    event.preventDefault();
    const nouvelEtudiant = {
      nom: entreNom,
      prenom: EntrePrenom,
      nbrAdmission: EntreNbr,
    };

    if (entreNom === "") {
      alert("Veuillez entrer un nom");
    }
    if (EntrePrenom === "") {
      alert("Veuillez entrer un prenom");
    }
    if (EntreNbr === "") {
      alert("Veuillez entrer un numero d’admission");
    }

    adresseMethode(nouvelEtudiant);
    setNom("");
    setPrenom("");
    setNbr("");
  }
  function nomHandler(e){
    setNom(e.target.value)
  }
  function prenomHandler(e) {
    setPrenom(e.target.value);
  }

  function nbrHandler(e) {
    setNbr(e.target.value);
  }

  return (
    <form onSubmit={ajouterNouvelEtudiantHandler}>
      <input type="text" value={entreNom} onChange={nomHandler}/> Nom {" "} <br/>
      <input type="text" value={EntrePrenom} onChange={prenomHandler} /> Prenom{" "} <br />
      <input type="number" value={EntreNbr} onChange={nbrHandler} />  Numero d’admission{" "} <br />
      <button type="submit">Soumettre Etudiant</button>
    </form>
  );
}

export default NouvelEtudiant;