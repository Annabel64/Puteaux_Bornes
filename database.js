//Still to be modified with right connection informations

const { MongoClient } = require('mongodb');
const { kill } = require('process');

const uri = "mongodb+srv://Whoever:CanAccess@clusterp.priic.mongodb.net/test";
const client = new MongoClient(uri);
const puteauxDB = client.db("PuteauxCommerces");
const commerces = puteauxDB.collection("CollectionCommerces");

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//To be executed once at application beginning
const openConnection = async function () {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

  } catch (e) {
    console.error(e);
  }
}

async function insertRows() {
  CreateMultipleListings(client, newListings);
}

const closeConnection = async function () {
  try {
    // Connect to the MongoDB cluster
    await client.close();

  } catch (e) {
    console.error(e);
  }
}

//Find document related to shop name, returns null if not found
const FindByName = async function (shopName) {
  const cursor = await client.db("PuteauxCommerces").collection("CollectionCommerces").findOne(
    {
      name: shopName
    }
  );
  if (cursor == null) { console.log("Haven't found any shop with this name...") }
  //else { console.log(`Found : ${shopName} -->`) }
  //console.log(cursor);
  return Promise.resolve(cursor);
}


//Return array of documents of one specified category
async function FindByCategory(client, shopCategory) {
  const filtered = await client.db("PuteauxCommerces").collection("CollectionCommerces").find({ type: shopCategory }).toArray();;
  if (filtered == null) { console.log("Maybe this category doesn't exist... ?") }
  return filtered;
}

//Insert/Add several documents to the database
async function CreateMultipleListings(client, newListings) {
  const result = await client.db("PuteauxCommerces").collection("CollectionCommerces").insertMany(newListings);
  console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
  console.log(result.insertedIds);
}
//How to be used : await CreateMultipleListings(client, [{x}, {y}])    --> x and y being shop-model objects


/*
//The order functions need to be called to ensure database safety
async function ScriptExample(){
  await openConnection();
  var docs = await FindByCategory(client, "Coiffeur");
  await closeConnection();
  docs = Promise.resolve(docs[0]);
 
  var l = Object.keys(docs).map(function (cle) {
    return [Number(cle), docs[cle]];
  });
 
  msg.style.color = "#12be00"
  msg.innerText = l;
  document.write(msg);
}
*/

async function Script2Example() {
  await openConnection();
  var docs = await FindByName("Duplinat");
  //console.log(docs);
  await closeConnection();
  return Promise.resolve(docs);
};



async function finalScript() {
  var commerce = await Script2Example();
  console.log(commerce);
}

//finalScript();

/////////////////////////////////////////////////////////////////////////////////////////////////
//  "FindBy..." are callable in other javascript functions once connection with database has been set  //
/////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = FindByName;
module.exports = FindByCategory;
module.exports = openConnection;
module.exports = closeConnection;
module.exports = Script2Example;
// module.exports = finalScript;


//Documents JSON to be inserted :

// REMARQUE: la moiti?? des termes est en anglais (name, fixedHTMLLink,...) et l'autre en fran??ais (horaires, latitude,...) donc ce serait pas mal de choisir l'un ou l'autre
const newListings = [
  {
    "name": "Duplinat",
    "type": "service",
    "longitude": "48.879212835106536",
    "latitude": "2.2395000294194793",
    "logo": "SDuplinat.png",
    "description": "DUPLINAT - Professionnels de l'imprimerie et de la reprographie depuis plus de 30 ans, nous vous proposons de r??aliser tous vos projets de leur conception au produit fini. Nous r??pondons de mani??re efficace aux demandes, m??me les plus sp??cifiques, de nos clients, qu'ils soient professionnels ou particuliers",
    "adresse": "4 rue Gerhard",
    "horaires": { "Lundi": ["9h", "12h30", "14h", "18h"], "Mardi": ["9h", "12h30", "14h", "18h"], "Mercredi": ["9h", "12h30", "14h", "18h"], "Jeudi": ["9h", "12h30", "14h", "18h"], "Vendredi": ["9h", "12h30", "14h", "18h"], "Samedi": ["9h", "12h30", "14h", "18h"], "Dimanche": ["9h", "12h30", "14h", "18h"] },
    "siteURL": "http://www.duplinat.fr/",
    "innerHTMLlink": "duplinat.html",
    "fixedlinePhone": "01 47 72 54 09",
    "mobilePhone": "06 95 77 68 94",
    "email": "contact@duplinat.fr",
    "socialsURL": []
  }
  ,
  {
    "name": "La_Retoucherie",
    "type": "service",
    "longitude": "48.884474756192645",
    "latitude": "2.246041106779962",
    "logo": "SRetoucherie.jpg",
    "description": "LA RETOUCHERIE - Depuis dix ans, La Retoucherie de Puteaux assure ?? ses clients un travail soign??. Les sp??cialit??s de la maison : la cr??ation de rideaux et voilages, tailleurs, robes, jupes, coussins, nappes, cuirs et fourrure.",
    "adresse": "31-33 rue Jean Jaures",
    "horaires": { "Lundi": ["8h", "19h30"], "Mardi": ["8h", "19h30"], "Mercredi": ["8h", "19h30"], "Jeudi": ["8h", "19h30"], "Vendredi": ["8h", "19h30"], "Samedi": ["8h", "19h30"], "Dimanche": [] },
    "siteURL": "http://www.laretoucherie-puteaux.com/contact.html",
    "innerHTMLlink": "la_retoucherie.html",
    "fixedlinePhone": "01 40 81 04 72",
    "mobilePhone": "",
    "email": "contact@laretoucherie-puteaux.com",
    "socialsURL": []
  }
  ,
  {
    "name": "Au_coin_des_barbus",
    "type": "barbeur",
    "longitude": "48.88656013545921",
    "latitude": "2.243758567676884",
    "logo": "BACDB.png",
    "description": "AU COIN DES BARBUS, VOTRE COIFFEUR BARBIER ?? PUTEAUX - Bienvenue dans l'univers 100% masculin du salon Au coin des barbus ! Chris et Max vous accueillent dans leur salon de coiffure et barbershop. Un lieu authentique qui recr???? l???ambiance des ann??es 40,50, un salon cool et hyper confortable. Chez Au coin des barbus, tout est pens?? pour oublier le temps ! Chris et Max font des coupes qui se d??marquent",
    "adresse": "73 rue de la r??publique",
    "horaires": { "Lundi": ["10h", "20h"], "Mardi": ["10h", "20h"], "Mercredi": ["10h", "20h"], "Jeudi": ["10h", "20h"], "Vendredi": ["10h", "20h"], "Samedi": ["9h", "19h"], "Dimanche": [] },
    "siteURL": "https://www.aucoindesbarbus.fr/ ",
    "innerHTMLlink": "au_coin_des_barbus.html",
    "fixedlinePhone": "01 75 84 79 15",
    "mobilePhone": "",
    "email": "",
    "socialsURL": ["https://www.instagram.com/aucoindesbarbusladefense/"]
  }
  ,
  {
    "name": "Coiffure_Wallace",
    "type": "coiffeur",
    "longitude": "48.880480232298375",
    "latitude": "2.2386962375595276",
    "logo": "CWallace.jpg",
    "description": "COIFFURE WALLACE - Notre salon vous propose de rafra??chir votre coupe de cheveux. Nos coiffeurs professionnels s'occupent de la beaut?? de votre chevelure avec des produits de qualit?? et notre savoir-faire. Avec ou sans rendez-vous, nous serons heureux de vous recevoir. Le jeudi et le vendredi, nous fermons plus tard pour votre convenance, venez en profiter !",
    "adresse": "35 boulevard Richard Wallace",
    "horaires": { "Lundi": ["9h30", "19h"], "Mardi": ["9h30", "19h"], "Mercredi": ["9h30", "19h"], "Jeudi": ["9h30", "21h"], "Vendredi": ["9h30", "21h"], "Samedi": ["9h30", "19h"], "Dimanche": [] },
    "siteURL": "https://coiffurewallace.site-solocal.com/",
    "innerHTMLlink": "Coiffure_Wallace.html",
    "fixedlinePhone": "01 42 04 17 70",
    "mobilePhone": "",
    "email": "coiffeur.wallace78@gmail.com",
    "socialsURL": []
  }
  ,
  {
    "name": "So'Beauties",
    "type": "beaute",
    "longitude": "48.88579598328952",
    "latitude": "2.231679775630686",
    "logo": "BSoBeauties.png",
    "description": "SO'BEAUTIES - Esth??ticienne depuis 16 ans et forte de l???exp??rience acquise au cours de ces ann??es, je mets d??sormais mon savoir faire ?? votre disposition, chez vous ou ailleurs, seule ou entre amies. Le luxe du soin ?? domicile vous permet de b??n??ficier de soins de qualit?? tout en restant dans votre cocon dans une ambiance personnalis??e et aussi relaxante qu???en institut. Oubliez la perte de temps de d??placement ou pour trouver une place, les frais d'une baby-sitter, les probl??mes de mobilit????? Optez pour la facilit?? !",
    "adresse": "B??timent V 16 all Henri Sellier,",
    "horaires": { "Lundi": ["9h30", "20h"], "Mardi": ["9h30", "16h"], "Mercredi": ["17h", "20h"], "Jeudi": ["9h30", "16h"], "Vendredi": ["9h30", "20h"], "Samedi": ["9h30", "20h"], "Dimanche": [] },
    "siteURL": "https://www.sobeauties.fr/",
    "innerHTMLlink": "So_Beauties.html",
    "fixedlinePhone": "",
    "mobilePhone": "06 58 52 68 06",
    "email": "raquel@sobeauties.fr",
    "socialsURL": ["https://www.facebook.com/sobeauties", "https://www.instagram.com/raquelanziani_sobeauties/"]
  }
  ,
  {
    "name": "Huguito",
    "type": "restauration",
    "longitude": "48.88424350543932",
    "latitude": "2.2359708909708558",
    "logo": "RHuguito.jpg",
    "description": "HUGUITO - Le restaurant vous invite ?? un voyage en Am??rique latine. Du Rio grande ?? la Terre de feu, Huguito propose sa version des classiques de la gastronomie latino-am??ricaine. Dans une ambiance conviviale et chaleureuse, venez ??veiller vos papilles aux go??ts de d??licieux tapas , d??couvrir une excellente viande argentine cuite ?? la parilla ou un d??licat Ceviche. Le tout accompagn?? d???une s??lection de vins chiliens, argentins et nos cocktails cr??ation ?? base de Pisco et Rhum.",
    "adresse": "76 rue Victor Hugo",
    "horaires": { "Lundi": [], "Mardi": ["12h", "14h30", "19h", "22h"], "Mercredi": ["12h", "14h30", "19h", "22h"], "Jeudi": ["12h", "14h30", "19h", "22h"], "Vendredi": ["12h", "14h30", "19h", "23h"], "Samedi": ["19h", "23h"], "Dimanche": ["11h", "16h"] },
    "siteURL": "https://www.huguito.fr/",
    "innerHTMLlink": "Huguito.html",
    "fixedlinePhone": "09 82 40 35 92",
    "mobilePhone": "06 22 80 00 47",
    "email": "reservation@huguito.fr",
    "socialsURL": ["https://www.facebook.com/huguitorestaurant/", "https://www.instagram.com/huguito_resto/?hl=fr"]
  }
  ,
  {
    "name": "Roasty",
    "type": "restauration",
    "longitude": "48.88029158644135",
    "latitude": "2.2406452989231593",
    "logo": "RRoasty.jpg",
    "description": "ROASTY - Rotisseur fran??ais | Poulet Fermier du Gers????, Le??gumes frais???? Dessert vraiment maison???? sur place ou a?? emporter",
    "adresse": "24 Bd Richard Wallace",
    "horaires": { "Lundi": ["11h30", "14h30", "18h", "21h"], "Mardi": ["11h30", "14h30", "18h", "21h"], "Mercredi": ["11h30", "14h30", "18h", "21h"], "Jeudi": ["11h30", "14h30", "18h", "21h"], "Vendredi": ["11h30", "14h30", "18h", "21h"], "Samedi": ["10h", "15h"], "Dimanche": ["10h", "15h"] },
    "siteURL": "https://www.instagram.com/roasty.fr/?hl=fr",
    "innerHTMLlink": "roasty.html",
    "fixedlinePhone": "",
    "mobilePhone": "07 49 36 26 04",
    "email": "",
    "socialsURL": ["https://instagram.com/roasty.fr/"]
  }
  ,
  {
    "name": "Resunga",
    "type": "restauration",
    "longitude": "48.88713484387093",
    "latitude": "2.2442867142674086",
    "logo": "RResunga.jpg",
    "description": "Restaurant n??palais et indien - CHEZ RESUNGA - La qualit?? est notre identit??. Dans le quartier de la D??fense, notre restaurant situ?? ?? Puteaux vous propose de d??licieux plats traditionnels n??palais et indiens. Vous vous r??galerez avec notre cuisine parfum??e et aux ??pices vari??es. Nous sommes ?? votre service pour vous offrir un repas de qualit??. Au plaisir de vous accueillir !",
    "adresse": "51 rue de la R??publique",
    "horaires": { "Lundi": ["12h", "14h30", "17h30", "22h"], "Mardi": ["12h", "14h30", "17h30", "22h"], "Mercredi": ["12h", "14h30", "17h30", "22h"], "Jeudi": ["12h", "14h30", "17h30", "22h"], "Vendredi": ["12h", "14h30", "17h30", "22h"], "Samedi": ["12h", "14h30", "17h30", "22h"], "Dimanche": [] },
    "siteURL": "https://www.restaurantresunga.com/",
    "innerHTMLlink": "resunga.html",
    "fixedlinePhone": "09 82 21 71 39",
    "mobilePhone": "",
    "email": "",
    "socialsURL": ["https://www.facebook.com/Restaurant-R??sunga-103949358324031"]
  }
  ,
  {
    "name": "Indemodable",
    "type": "decoration",
    "longitude": "48.880794856030036",
    "latitude": "2.236873706310174",
    "logo": "DIB.jpg",
    "description": "INDEMODABLE - Ind??modable la boutique des jolies choses ?? offrir ?? sa maison ! Fans de d??co ? En recherche de cadeaux authentiques et durables ? Vous retrouverez tr??s progressivement tout ce que vous aimez ?? la boutique Ind??modable de Puteaux avec de belles marques Made in France, amis aussi le charme de l'ancien avec ce qu'a chin?? Brocanteo. ",
    "adresse": "166 Rue Jean Jaur??s",
    "horaires": { "Lundi": [], "Mardi": ["14h", "19h"], "Mercredi": ["14h", "19h"], "Jeudi": ["14h", "19h"], "Vendredi": ["14h", "19h"], "Samedi": ["11h", "19h"], "Dimanche": [] },
    "siteURL": "https://www.indemodable.com/",
    "innerHTMLlink": "indemodable.html",
    "fixedlinePhone": "01 41 38 24 23",
    "mobilePhone": "",
    "email": "",
    "socialsURL": ["https://www.facebook.com/boutiqueindemodable", "https://twitter.com/indemodable", "https://www.instagram.com/indemodableshop/", "https://www.linkedin.com/company/indemodable/"]
  }
  ,
  {
    "name": "The_florist",
    "type": "fleuriste",
    "longitude": "48.88066588956484",
    "latitude": "2.2396336989233876",
    "logo": "FTF.jpg",
    "description": "THE FLORIST - Vous recherchez une boutique de fleurs o?? vous vous sentirez comme ?? la maison? Une atmosph??re chic et champ??tre qui saura vous inspirer pour trouver le bouquet ?? votre image. Juste pour le plaisir des yeux ou pour trouver la fleur qui pourra la surprendre, nous vous attendons, vous ??tes nos invit??s. Chaque bouquet est pour nous une cr??ation unique. Florence et Cl??oph??e",
    "adresse": "36 Boulevard Richard Wallace",
    "horaires": { "Lundi": [], "Mardi": ["10h", "19h"], "Mercredi": ["10h", "19h"], "Jeudi": ["10h", "19h"], "Vendredi": ["10h", "19h30"], "Samedi": ["10h", "19h30"], "Dimanche": ["10h", "13h"] },
    "siteURL": "https://theflorist-florist.business.site/",
    "innerHTMLlink": "the_florist.html",
    "fixedlinePhone": "01 41 44 08 34",
    "mobilePhone": "06 74 62 62 56",
    "email": "",
    "socialsURL": []
  }
  ,
  {
    "name": "Fleuriste_lysanthus_Puteaux",
    "type": "fleuriste",
    "longitude": "48.89005316324182",
    "latitude": "2.2312496983605015",
    "logo": "FFLP.jpg",
    "description": "",
    "adresse": "18 Rue Marcelin Berthelot",
    "horaires": { "Lundi": ["14h", "18h"], "Mardi": ["10h", "19h30"], "Mercredi": ["10h", "19h30"], "Jeudi": ["10h", "19h30"], "Vendredi": ["10h", "20h"], "Samedi": ["10h", "20h"], "Dimanche": ["10h", "15h"] },
    "siteURL": "https://lysianthus.business.site/",
    "innerHTMLlink": "fleuriste_lysanthus.html",
    "fixedlinePhone": "09 51 43 35 74",
    "mobilePhone": "",
    "email": "",
    "socialsURL": []
  }
  ,
  {
    "name": "Elysa",
    "type": "vetement",
    "longitude": "48.89555577424616",
    "latitude": "2.2514822219654658",
    "logo": "VFE.jpg",
    "description": "ELYSA - C???est en septembre 2000 que j???ai repris cette boutique du centre-ville de Puteaux. Et depuis, je fais une s??lection rigoureuse dans les collections de toutes les marques pr??sentes en boutique. Les pi??ces choisies sont uniquement celles sur lesquelles j???ai eu un coup de c??ur. J???attache beaucoup d???importance ?? la qualit??, au touch??, aux couleurs et ?? la coh??rence des prix des v??tements propos??s. Les clientes d???aujourd???hui sont des femmes actives, de toutes g??n??rations qui aiment, comme moi, la mode et le style. Alors, venez craquer en boutique !!!",
    "adresse": "105 Rue Jean Jaures ",
    "horaires": { "Lundi": [], "Mardi": ["10h", "19h30"], "Mercredi": ["10h", "19h30"], "Jeudi": ["10h", "19h30"], "Vendredi": ["10h", "19h30"], "Samedi": ["10h", "19h30"], "Dimanche": ["10h", "13h"] },
    "siteURL": "https://elysa-puteaux.com/",
    "innerHTMLlink": "elysa.html",
    "fixedlinePhone": "01 47 76 29 84",
    "mobilePhone": "",
    "email": "elysaputeaux@gmail.com",
    "socialsURL": ["https://www.facebook.com/elysaputeaux92", "https://www.instagram.com/elysaputeaux/"]
  }
  ,
  {
    "name": "So_serenity",
    "type": "sante",
    "longitude": "48.88275178408953",
    "latitude": "2.2398970136979095",
    "logo": "SSerenity.jpg",
    "description": "So Serenity est un espace d??di?? au bien-??tre. Gr??ce ?? son ??quipe de sp??cialistes, So Serenity vous propose de prendre soin de votre corps, mais aussi de votre esprit. Massages du monde, sp??cifiques, sur tatamis ; ost??opathie ; psychologie ; sophrologie, yoga??? tout est pens?? pour votre bien-??tre. Jusque dans la salle d???attente, o?? des petites activit??s de l??cher-prise vous feront patienter tout en douceur : mandalas art-th??rapie, magazines de bien-??tre, guide de d??veloppement personnel???",
    "adresse": "60 rue Eug??ne Eichenberger",
    "horaires": { "Lundi": ["8h30", "20h"], "Mardi": ["8h30", "20h"], "Mercredi": ["8h30", "20h"], "Jeudi": ["8h30", "20h"], "Vendredi": ["8h30", "20h"], "Samedi": ["13h30", "20h"], "Dimanche": [] },
    "siteURL": "https://www.massageaparis.fr/so-serenity-salon-massage-le-defense-92911.php",
    "innerHTMLlink": "so_serenity.html",
    "fixedlinePhone": "01 49 01 23 94",
    "mobilePhone": "",
    "email": "",
    "socialsURL": []
  }
  ,
  {
    "name": "Pharmacie_boieldieu",
    "type": "sante",
    "longitude": "48.88890651030469",
    "latitude": "2.239499313700904",
    "logo": "SPharma.jfif",
    "description": "La Pharmacie BOIELDIEU vous propose un large choix de gamme de parapharmacie, de m??dicaments en libre-acc??s, de mat??riel m??dical. Notre ??quipe de professionnels comp??tents, est constamment form??e afin de conseiller et r??pondre ?? tous les besoins de nos clients. La pharmacie dispose de nombreux Services afin faciliter au maximum la vie de nos clients. L?????coute, Le conseil et le sourire sont, pour tous les membres de notre ??quipe, une priorit??.",
    "adresse": "60 Jardins Boieldieu",
    "horaires": { "Lundi": ["Consulter les gardes"], "Mardi": ["Consulter les gardes"], "Mercredi": ["Consulter les gardes"], "Jeudi": ["Consulter les gardes"], "Vendredi": ["Consulter les gardes"], "Samedi": ["Consulter les gardes"], "Dimanche": ["Consulter les gardes"] },
    "siteURL": "https://pharmacieboieldieu.fr/",
    "innerHTMLlink": "pharmacie_boieldieu.html",
    "fixedlinePhone": "01 47 76 16 49 ",
    "mobilePhone": "",
    "email": "",
    "socialsURL": []
  }

];

