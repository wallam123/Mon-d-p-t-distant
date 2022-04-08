
/*var nom = window.prompt ("Entrez votre nom");
var prenom = window.prompt ("Entrez votre prénom");

if (window.confirm("Etes-vous un homme") == true) 
{ 
   alert ("bonjour M" + " " + nom + " " + prenom +"\n Bienvenue sur notre site web !")
}

else {
    alert ("Mme" + " " + nom + " " + prenom +"\n Bienvenue sur notre site web!")
} */


//var prenom = window.prompt ("combien font 2 + 2");






/*if (window.prompt("combien font 2 + 2") == "4") 
{ 
    console.log("Bonne réponse !"); // => consol log permet de vérifier la réponse sur la page web (avec F12)
   //alert ("bravo ma couille")
}

else {
  alert ("t'es pas la moitié d'une quiche toi !!")
}*/


                                        //!!!!!!!!!!! EXERCICES CHAPITRE 6 "LES OPERATEURS !!!!!!!!!!!!!!!!!!!!

/*var a = "100";
var b = 100;
var c = "1.00";
var d = true;



                                                            // EX 1 : Affichez  et concaténez !

window.alert("ceci est une chaîne de caractères : " + a);

                                                            // EX 2 : DEMCREMENTER

//var e = b++; 
//document.write (b);

                                                            // EX 3 : AJOUTER UNE VALEUR

document.write (a+c);

                                                            // EX 4 : Inversez la valeur

// d =! true;
// document.write (+ d);
*/



                                                            // EXERCICE 1 MODULO

//var num = 2
                                                            
/*var num = window.prompt("veuillez entrez un nombre");

if (num %2 ==0)
{+
alert ("pair")
}
else {
   alert ("impair")
}
*/
                                                            // exercice 2.7 AGE "Déterminer âge depuis l'année de naissance"

/*var num = window.prompt("veuillez indiquer votre année de naissance");
var num1 = 2022
var an = (num1 - num)

if (num <= 2004)
{
   console.log("Vous êtes majeur")
   console.log(an);
}

else {
   console.log("vous êtes mineur")
   console.log(an);
}*/


                                                         // EXERCICE 3 CALCULETTE

// Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /. 
//" Ajouter parsInt pour que l'ordi reconnaisse les nombres comme des entiers et non une suite de caractère

/*var num = parseInt (window.prompt("Entrer 1er nombre"));
var num1 = parseInt (window.prompt("Entrer 2ème nombre"));
var OPERATEURS = window.prompt ("Entrer OPERATEURS" + " " + "(+)" + " " + '(x)' + " " + '(-)' + " " + '(/)');

if (OPERATEURS == "+" )
{
   var total = num + num1;
   console.log (total)
}

      else if (OPERATEURS == "-" )
      {
   var total = num - num1;
   console.log (total)
      }

      else if (OPERATEURS == "*" )
      {
   var total = num * num1;
   console.log (total)
      }

      else if (OPERATEURS == "/" )
      {
   var total = num / num1;
   console.log (total)    
    if (num == "0")                                
             {
               alert ("error 404");
             }
         else if (num1 == "0")
             {
                alert ("Infinity");
             }
   
      }

else                                               // <= Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur
{
   alert ("error 404");
}
*/

var i = 0;

console.log("Table de multiplication par 5");
console.log("=============================");

while (i <= 10) 
{   
   if (i== 5) 
    {
       i++
       continue;
    } 
    resultat = 5 * i;


    console.log("Le résultat de 5 x "+i+" est : "+resultat);

    i++; 
}

console.log("fin de la boucle");
