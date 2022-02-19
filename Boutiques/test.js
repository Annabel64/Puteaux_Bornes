const { FindByName } = require('./../database')

function afficher_infos(nom_commerce){
    // En liant à la bdd mais je n'ai pas pu tester car il y a un pb avec le fichier database.js
    // var donnees = FindByName(client, nom_commerce);
    // document.getElementById("nom").innerHTML = donnees[0].name;
    // document.getElementById("adresse").innerHTML = donnees[0].adresse; 
    // document.getElementById("tel").innerHTML = donnees[0].fixedlinePhone;
    // document.getElementById("description").innerHTML = donnees[0].description;
    
    // Sans lier à la bdd. Fonctionne
    document.getElementById("nom").innerHTML = "Au coin des barbus";
    document.getElementById("adresse").innerHTML = "73 rue de la république"; 
    document.getElementById("tel").innerHTML = "01 75 84 79 15";
    document.getElementById("description").innerHTML = "AU COIN DES BARBUS, VOTRE COIFFEUR BARBIER À PUTEAUX<br>Bienvenue dans l'univers 100% masculin du salon Au coin des barbus !<br>     Chris et Max vous accueillent dans leur salon de coiffure et barbershop au cœur de Puteaux dans le quartier de la défense.Un lieu authentique qui recréé l’ambiance des années 40,50, un salon cool et hyper confortable. Chez Au coin des barbus,tout est pensé pour oublier le temps !<br> Confortablement installé dans un authentique fauteuil de barbier, laissez-vous allez dans une ambiance cosy, retrouvez le côté vintage des salons d’autre fois sans oublier leur côté chic indémodable.<br> Jeunes coiffeurs de talents, Chris et Max font des coupes qui se démarquent. Ils font exclusivement les hommes barber,dégradé, barbe, moustache...un travail de qualité, dans un style unique. Quelle que soit la densité de votre barbe, ou de vos cheveux, vos coiffeurs barbiers à Puteaux apporteront soin et délicatesse, afin d’obtenir le résultat souhaité. "
    alert('lancéééé');  
}
