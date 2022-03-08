//const Script2Example = require('../database.js');
const closeConnection = require('../database.js');
const finalScript = require('../database.js');
const openConnection = require('../database.js');
const FindByName = require('../database.js');

async function afficher_infos(nom_commerce){

    openConnection;
    // En liant à la bdd mais je n'ai pas pu tester car il y a un pb avec le fichier database.js
    console.log('la');
    //var donnees = await FindByName(nom_commerce);
    var donnees = await finalScript();
    console.log('lala');
// MAINTENANT CA MARCHE ET LA IL FAUT JUSTE LIER TEST.JS ET TEST2.HTML !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // document.getElementById("nom").innerHTML = donnees.name;
    // document.getElementById("adresse").innerHTML = donnees.adresse; 
    // document.getElementById("tel").innerHTML = donnees.fixedlinePhone;
    // document.getElementById("description").innerHTML = donnees.description;
    
    // Sans lier à la bdd. Fonctionne
    // document.getElementById("nom").innerHTML = "Au coin des barbus";
    // document.getElementById("adresse").innerHTML = "73 rue de la république"; 
    // document.getElementById("tel").innerHTML = "01 75 84 79 15";
    // document.getElementById("description").innerHTML = "AU COIN DES BARBUS, VOTRE COIFFEUR BARBIER À PUTEAUX<br>Bienvenue dans l'univers 100% masculin du salon Au coin des barbus !<br>     Chris et Max vous accueillent dans leur salon de coiffure et barbershop au cœur de Puteaux dans le quartier de la défense.Un lieu authentique qui recréé l’ambiance des années 40,50, un salon cool et hyper confortable. Chez Au coin des barbus,tout est pensé pour oublier le temps !<br> Confortablement installé dans un authentique fauteuil de barbier, laissez-vous allez dans une ambiance cosy, retrouvez le côté vintage des salons d’autre fois sans oublier leur côté chic indémodable.<br> Jeunes coiffeurs de talents, Chris et Max font des coupes qui se démarquent. Ils font exclusivement les hommes barber,dégradé, barbe, moustache...un travail de qualité, dans un style unique. Quelle que soit la densité de votre barbe, ou de vos cheveux, vos coiffeurs barbiers à Puteaux apporteront soin et délicatesse, afin d’obtenir le résultat souhaité. "
    // alert('lancéééé');  

    closeConnection;
    Promise.resolve(donnees).then(console.log);
}

// console.log('lalala');
afficher_infos("Duplinat");
// console.log('lalalala');

// async function lienHTML(nom_commerce){
//     var donnees=afficher_infos(nom_commerce)
//     document.getElementById("nom").innerHTML = donnees.name;
//     document.getElementById("adresse").innerHTML = donnees.adresse;
//     document.getElementById("tel").innerHTML = donnees.fixedlinePhone;
//     document.getElementById("description").innerHTML = donnees.description;
//     console.log(Promise.resolve(donnees));
// }

// lienHTML("Duplinat");
// module.exports = lienHTML;