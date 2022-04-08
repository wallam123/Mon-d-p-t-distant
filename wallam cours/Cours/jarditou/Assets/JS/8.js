
// EXO 8 // 


                                                                // EXERCICE 1.8 : Do....... while 
// var prenom;
// var cpteur=0;
// var message= " ";

//  do {

//    prenom= window.prompt ("Entrez prénom N°1 ou clique sur annuler pour arrêter la saisie");
   
//  if(prenom !=""){
//   message = message + " " + prenom;
//   cpteur++;


//  }


//    console.log(prenom);
//    //console.log (resultat = prenom);

// } while (prenom !=""); 


// alert("nombre de prénoms saisis : "+cpteur+" qui sont : " + message);






                                                            // !!!!!!!!!!!  while  //////////////////////


/* prenom= window.prompt ("Entrez prénom N°1 ou clique sur annuler pour arrêter la saisie");

while(prenom !=""){

//  prenom= window.prompt ("Entrez prénom N°1 ou clique sur annuler pour arrêter la saisie");

// }
// if(prenom == "")
// alert ("fin");*/

                                                            // Exercice 2.8 - Ecrire un programme qui affiche les nombres inférieurs à N.

// var N = window.prompt ("Entrez le nombre ");

// var message="";

// for (i=0; i<N; i++){
//     console.log (i)
// }

//   **************************************************************************************************************************************************      

// if (i!=(N-1)){
//     message = message + i + ", f(prenom !="")
//   message = message + " " + prenom;
//   cpteur++;
// }
//                                             //  ********parseInt

   
//  if(N !="0"){
//   resultat = resultat + " " + N;
  
//  }


// } while (N !="0"); 




////////////////////////////////////////////// EXERCICE 3.8 ////////////////////////////

//nombre saisi par l'utilisateur
// var num;
// //
// var cpteur=0;
// //
// var resultat=0;
// //
// var moy = 0;

// do {

//     num = parseInt (window.promp,1);
 //alert("ma lettre en 1 vaut : 
//     cpteur++;
//     console.log (resultat);
//     }


// }
// while (num !=0);

// console.log (resultat);
// console.log (cpteur);
// console.log (moy = resultat/cpteur);



                                                        // Exercice 4 - Multiples




//  Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.

    
// var N = le nombre de fois que X sera multiplié
// var X = la valeur de référence de la table de multiplication

// var resultat=0;

// X = parseInt (window.prompt("CHOISIR UN NOMBRE")); 
// N = parseInt (window.prompt("CHOISIR LE COEF MULTIPLICATEUR")); 
    
//     for (i=1; i<=N; i++)
//     {
        
//        resultat = i*X;
       

//        console.log(resultat);
       
//     }
   





                                                    // exo 4 version break

// var N;
// var X;

// var resultat=0;

// X = parseInt (window.prompt("CHOISIR UN NOMBRE")); 
// N = parseInt (window.prompt("CHOISIR LE COEF MULTIPLICATEUR")); 

// for (i=1; i<=N; i++)
// {
//     resultat = i * X;

//   if (i==N+1) {
//       break
//   }
    

//     console.log(resultat);
// }

// // instructions exécutées après le for (i vaut 10)
// console.log("fin de la boucle");
    
// ********************************************************Exercice 5 - Nombre de voyelles.............................................
// *************************Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :
// myVar.length : retourne le nombre de lettres de la chaîne myVar.
// myVar.substring(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p (attention, en Javascript, 
//   le 1er caractère se trouve à la position 0)
// myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1).







// var text = "";

// text= window.prompt("entrez votre mot");

// var nbre_lettres=text.length;

// console.log("mot : "+nbre_lettres);

// var ma_lettre="";


// var cpteur_voyelle=0;


//  for(i=0;i<nbre_lettres;i++){


//      ma_lettre=text.substring(i,(i+1));

//     console.log("ma lettre en "+i+" vaut : "+ ma_lettre);

//     if(ma_lettre=="a"||ma_lettre=="e"||ma_lettre=="i"||ma_lettre=="o"||ma_lettre=="u"||ma_lettre=="y"){

//         cpteur_voyelle++;
//     }


//  }


//  console.log("nombre de voyelles :" + cpteur_voyelle);


//************************************************************************************************************************************************************
//************************************************************************************************************************************************************

 

// var tableau;
// var i ;
// var text;

// text= window.prompt("entrez votre mot");

// for (i in tableau){

//   console.log(tableau[i]);
// }






// var tableau = [];
// var tableau0 = ["a", "e", "i", "o", "u", "y"];
// // var tableau[1] = [e] ;
// // var tableau[2] = [i];
// // var tableau[3] = [o];
// // var tableau[4] = [u];
// // var tableau[4] = [y];

// tableau= window.prompt("entrer mot");

// if (tableau)

// console.log (tableau0.length)

// // for (i=0; in tableau) 
// // {
// //     console.log(tableau[i]);
// // }

// // // 

// var text;
// saisie
// int vowelcount = 0 ;














      
                                                                // EXERCICE 10//



var myTableau = []; 
var taille_tab;
var valeur= "";
var resultat


    taille_tab =parseInt (window.prompt("entrez votre nombre d'elements de tableau"));

   
    alert("le nombre d'element de votre tableau est de " + taille_tab);




    for (i = 0; i < taille_tab; i++) {
        
         valeur= (window.prompt("entrez vos valeurs"));

         myTableau[i] = [valeur];  

       
    }
    
   console.table(myTableau); // fonction exclusive à JS : elle fait l'opération et affiche un tableau.

  
  
   //***** formule (opération) derrière la "fonction console.table()"" A appliquer en dehors de JS

//   for(i=0;i<myTableau.length;i++){


// alert("en "+i+" on a : "+myTableau[i]);

//   }


//************************************************************************************************************************************************* */


                                                       // EXERCICE 9*********************















    
    
   









