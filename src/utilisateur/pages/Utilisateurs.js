import React from "react";
import ListeUtilisateurs from "../../places/components/ListeUtilisateurs";

function Utilisateurs(){
    const utilisateurs = [{
        id: "u1",
        nom: "Sylvain Labranche",
        image : "URL",
        places : 3
     }
    ];
    return <ListeUtilisateurs utilisateurs={utilisateurs}/>
};

export default Utilisateurs;