import React, {useState} from "react";

function NouvelProf(props) {
    const [entreNom, setEntreNom] = useState("")
    const [entrePrenom, setEntrePrenom] = useState("")
    const [entreDate, setEntreDate] = useState("")
    const [entreListe, setEntreListe] = useState("")

    function ajouterNouvelProfHandler(event) {
        event.preventDefault();
         const nouvelProf = {
            id: props.profs.length.toString(),
            nom: entreNom,
            prenom: entrePrenom,
            imageURL: "",
            dateEmbauche: entreDate,
            listeCours: entreListe,
        };

        if(entreNom===""){
            alert("Veuillez entrer un nom")
        }

        if(entrePrenom===""){
            alert("Veuillez entrer un prenom")
        }

        if(entreDate===""){
            alert("Veuillez entrer une date d'enbauche")
        }

        if(entreListe===""){
            alert("Veuillez entrer la liste des cours offers par le prof")
        }
        
        props.setProf(props.profs.concat(nouvelProf));

        setEntreNom("")
        setEntrePrenom("")
        setEntreDate("")
        setEntreListe("")

       }
       function nomSaisieHandler(e){
        setEntreNom(e.target.value)
       }
       function prenomSaisieHandler(e){
        setEntrePrenom(e.target.value)
       }
       function dateEmbaucheSaisieHandler(e){
        setEntreDate(e.target.value)
       }
       function listeCoursSaisieHandler(e){
        setEntreListe(e.target.value)
       }
       return (
        <form onSubmit={ajouterNouvelProfHandler}>
          Nom <input  type="text" value={entreNom} onChange={nomSaisieHandler}/>  <br/>
          Prenom <input type="text" value={entrePrenom} onChange={prenomSaisieHandler}/> <br/>
          Date embauche, ex: 16 Juin 2015 <input type="text" value={entreDate} onChange={dateEmbaucheSaisieHandler}/>  <br/>
          Liste des Cours <input type="text" value={entreListe} onChange={listeCoursSaisieHandler}/> <br/>
          <button type="submit">Soumettre Prof </button>
        </form>
      );
    }

    export default NouvelProf;