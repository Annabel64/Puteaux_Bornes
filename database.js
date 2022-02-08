//Still to be modified with right connection informations

// importation de mongoose pour communiquer avec MongoDB
const mongoose = require('mongoose')

const { Etudiant, Cours, ReservationSalle } = require('./schemas')

// cette fonction initialise la connexion avec mongodb
function initialize () {
  // (il faut utiliser l'url "mongodb://localhost:27018" sur mongodb compass pour se connecter à la bdd)
  const uri = 'mongodb://leolearningmongodb:27017/leolearning'
  // const uri = 'mongodb+srv://Yvann:Romane@leolearning.sdryf.mongodb.net/LeoLearning?retryWrites=true&w=majority'

  // on supprime l'erreur : 'collection.ensureIndex is deprecate'
  mongoose.set('useCreateIndex', true)
  mongoose.set('autoIndex', true)

  // connexion à la base de données + drop des anciennes données
  var counter = 0
  function connectionCloseChecker () {
    counter += 1
    if (counter === 3) {
      mongoose.connection.close()
    }
  }
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      // no pb durant la connexion à la bdd
      console.log('Connexion à mongo réussie 💪')

      // // on nettoie les collections (est utile pour la phase de développement)
      // Etudiant.deleteMany({}, (err) => {
      //   if (err) console.log(' ❌  Erreur durant le nettoyage de la collection "étudiant"', err)
      //   console.log(' ✔️  Nettoyage de la collection "étudiant" effectué')
      //   connectionCloseChecker()
      // })
      // Cours.deleteMany({}, (err) => {
      //   if (err) console.log(' ❌  Erreur durant le nettoyage de la collection "cours"', err)
      //   console.log(' ✔️  Nettoyage de la collection "cours" effectué')
      //   connectionCloseChecker()
      // })
      // ReservationSalle.deleteMany({}, (err) => {
      //   if (err) console.log(' ❌  Erreur durant le nettoyage de la collection "reservationsalles"', err)
      //   console.log(' ✔️  Nettoyage de la collection "reservationsalles" effectué')
      //   connectionCloseChecker()
      // })
    })
    // pb durant la connexion à la bdd
    .catch(() => console.log('Erreur durant la connexion à mongo 😞'))
}

module.exports = initialize;