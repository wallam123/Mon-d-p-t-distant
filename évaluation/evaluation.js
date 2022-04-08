

// ******************************************************************** Exercice 1 *********************************************- 





// Calcul du nombre de jeunes, de moyens et de vieux
// Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

// Le programme doit demander les âges successifs.

// Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

// Donnez le programme Javascript correspondant qui affiche les résultats.






// var age;
// var jeune=0;
// var middle=0;
// var vieux=0;

// //dénombrer les personnes d'âge strictement inférieur à 20 ans,

// do {
//     age = parseInt (window.prompt ("Veuillez indiquer votre age")); 

// 12
   
//                 if (age < 20) {

                   
//                      jeune++;
                    
//                     }

//                 else if (age>=20 && age<40) {
                 
//                         middle++;
//                             }
//                 else if (age>= 40) {
                 
//                     vieux++;
//                 }

//                 else if (age >= 100)
//                  {
//                      vieux++;
//                  }
//     }

// while (age < 100) {
    
// }

// console.log ("il y a " + jeune + " jeune");
// console.log ("il y a " + middle+ " middle");
// console.log ("il y a " + vieux + " vieux");


//****************************************** */



// Exercice 1 Version tableau



// //*********************************************************
// var ages = { jeunes: [], middle: [], vieux:[] };

// //dénombrer les personnes d'âge strictement inférieur à 20 ans,
// var age = 0;

// do {
//     age = parseInt (window.prompt ("Veuillez indiquer votre age")); 


   
//                 if (age < 20) {

                   
//                      ages.jeunes.push(age);
                    
//                     }

//                 else if (age>=20 && age<40) {
                     
//                         ages.middle.push(age);
//                             }
//                 else if (age>= 40) {
//                     ages.vieux.push (age);
//                 }

//                 else if (age >= 100)
//                 {ages.vieux.push (age);
                    
//                 }
//     }

// while (age < 100) {
    
// }

// console.table (ages.jeunes);
// console.table (ages.middle);
// console.table(ages.vieux);
// console.log ("il y a " + ages.jeunes.length + " jeune");
// console.log ("il y a " + ages.middle.length + " middle");
// console.log ("il y a " + ages.vieux.length + " vieux");



// **********************************************Exercice 2**************************************


//Table de multiplication
// Ecrivez une fonction qui affiche une table de multiplication.

// Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.

// Par exemple, TableMultiplication(7) doit afficher :

// 1 x 7 = 7

// 2 x 7 = 14

// 3 x 7 = 21 ...

 
// var num; 
// num= parseInt(window.prompt ("saisissez num"));  
// function TableMultiplication(x)
// {

//      for (i=0; i<=10; i++) 
//      {
//        console.log (x + " * "  + i + "=" + " " + (x * i))
//      }
// }

// TableMultiplication(num);



// *****************************pour comprendre le principe de la fonction***********************************

//1)

// function plus (a,b) { return a +b}

// var x = parseInt(prompt("nombre 1"));
// var y = parseInt(prompt("nombre 2"));
// console.log(plus(x,y));

// 2)

// function hi(nom) { document.getElementById("hi").textContent = "Hello, " + nom + "!"; }
// var z = prompt("votre nom");
// hi(z);

// var n = 10
//for (var i = 0; i<=10; i++) console.log(i + " * " + num + " = " + (num * i));






//********************************************Exercice 3 : recherche d'un prénom **********************************************/

var tab = [];
var prenom;

do {
  prenom = window.prompt ("veuillez renseigner votre prénom");
  
  
}
while (prenom != "");

  


tab [0] = [prenom]; 
console.table(tab);


// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];



// console.table (tab);







