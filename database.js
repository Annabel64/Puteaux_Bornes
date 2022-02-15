//Still to be modified with right connection informations

const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://Whoever:CanAccess@clusterp.priic.mongodb.net/test";
const client = new MongoClient(uri);
const puteauxDB = client.db("PuteauxCommerces");
const commerces = puteauxDB.collection("CollectionCommerces");

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//To be executed once at application beginning
async function openConnection(){
  try {
    // Connect to the MongoDB cluster
    await client.connect();

  } catch (e) {
      console.error(e);
  }
}

async function closeConnection(){
  try {
    // Connect to the MongoDB cluster
    await client.close();

  } catch (e) {
      console.error(e);
  }
}

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Displays all available databases on server
    //await listDatabases(client);

    // Retrieve and displays shop with name : Coiffeur du coin
    var docs = await FindByName(client, "Coiffeur du coin");
    console.log(docs);

    // Adds a shop with only name = "Jean-Miguel" (was just a draft)
    //await CreateMultipleListings(client, [{"name": "Jean-Miguel"}]);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }

}

//Find document related to shop name, returns null if not found
async function FindByName(client, shopName){
  const cursor = await client.db("PuteauxCommerces").collection("CollectionCommerces").findOne(
    {
      name: shopName
    }
  );
  if (cursor == null) {console.log("Haven't found any shop with this name...")}
  else {console.log(`Found : ${shopName} -->`)}
  return cursor;
}

//Return array of documents of one specified category
async function FindByCategory(client, shopCategory){
  const filtered = await client.db("PuteauxCommerces").collection("CollectionCommerces").find({type:shopCategory}).toArray();;
  if (filtered == null) {console.log("Maybe this category doesn't exist... ?")}
  return filtered;
}

//Insert/Add several documents to the database
async function CreateMultipleListings(client, newListings){
  const result = await client.db("PuteauxCommerces").collection("CollectionCommerces").insertMany(newListings);
  console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
  console.log(result.insertedIds); 
}
//How to be used : await CreateMultipleListings(client, [{x}, {y}])    --> x and y being shop-model objects



//The order functions need to be called to ensure database safety
async function ScriptExample(){
  await openConnection();

  //var doc = await FindByName(client, "Coiffeur du coin");
  var docs = await FindByCategory(client, "Coiffeur");
  console.log(docs);

  await closeConnection();
}

    ///////////////////////////////////////////////////////////////////////////////////////////////////
//  ScriptExample() is the only function called by "node database.js", it shows functions calling order  //
    ///////////////////////////////////////////////////////////////////////////////////////////////////
ScriptExample();

    /////////////////////////////////////////////////////////////////////////////////////////////////
//  "FindBy..." are callable in other javascript functions once connection with database has been set  //
    /////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = FindByName;
module.exports = FindByCategory;



/*
Document JSON model to be inserted :
{
    "name": "Coiffeur du coin",
    "type": "Coiffeur",
    
    "longitude": "0.2132",
    "latitude": "0.4587",
    
    "logo": "path/coiffeur.jpg",
    "affluence": "path/affluence.png",
    
    "description": "Bienvenue chez le Coiffeur du coin ! Dégradé ou carré plongeant avec lissage brésilien, on sait tout faire.",
    "phoneNumber": "0783045634",
    "adresse": "45 rue du Chene Majestueux",
    "email": "CoiffeurDuCoin@cdc.fr",
    "siteURL": "coiffeurducoin.fr",
    "socialsURL": [
      "facebook/coiffeurducoin.fr", "tiktok.com/@cdcputeaux"]
}
*/