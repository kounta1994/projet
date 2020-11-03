
function validation() {
    document.getElementById("error").innerHTML="";
    document.getElementById("resultat").innerHTML="";

    var erreur;
    var nom=document.getElementById("nom");
    var prenom=document.getElementById("prenom");
    var email=document.getElementById("email");
    var adresse=document.getElementById("adr");
    var date_de_naissance=document.getElementById("date");
   if (!nom.value || nom.value.length<5)
   {
       erreur="le nom doit contenir au mois 5 caractères";
       
    }
     if (!prenom.value || prenom.value.length<5)
   {
       erreur="le prénom doit contenir au mois 5 caractères";
    }
       if (!email.value)
   {
       erreur="veuillez remplir le champ email";
    }
       if (!adresse.value)
   {
       erreur="Veuillez remplir le champ adresse";
    }
       if (!date_de_naissance.value)
   {
       erreur="veuillez remplir le champ date de naissance";
    }
    if(erreur){
      
        document.getElementById("error").innerHTML = erreur;
    }
    else{
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
    }

}
// on peut aussi utiliser la boucle for pour résoudre ce probléme!

//var erreur1;
//var inputs=document.getElementsByTagName=("input");
//for (var i=0; i<inputs.length; i++)
/*{
    if(!inputs[i].value || inputs[i].value.length<5){
    erreur1="le prénom ou le nom doivent contenir au mois 5 caractères";}

}
 if(erreur){
      
        document.getElementById("error").innerHTML = erreur1;
    }
    else{
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
    }
*/