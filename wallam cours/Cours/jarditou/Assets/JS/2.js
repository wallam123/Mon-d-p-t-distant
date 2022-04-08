var prenom = prompt("entrer votre prenom");
//document.write("Bonjour "+prenom);
//alert("bonjour " +prenom);
//console.log(prenom);

var nom = prompt ("Entre votre nom");
//alert(" tu vas le rentrer ton nom !!! " +nom +" "+ prenom);

if (window.confirm("Etes-vous un homme ?") ==true)
{
    alert("Bonjour Monsieur" +nom+" "+ prenom);
}
   
else {         
    alert("Bonjour, Madame "+prenom+" "+nom+"\n \n Bienvenue sur notre site");
   }
    /*/// demande du nom 
    var nom = window.prompt("Saisissez votre nom"); 
    // demande du prenom 
    var prenom = window.prompt("Saisissez votre prénom");  
    // choix sexe et boite de dialogue bonjour / 
    if (window.confirm("Etes-vous un homme ?") ==true) 
        {        
         alert("Bonjour, Monsieur "+prenom+" "+nom+"\n \n Bienvenue sur notre site"); 
        }
          else {         
              alert("Bonjour, Madame "+prenom+" "+nom+"\n \n Bienvenue sur notre site");
             }
*/