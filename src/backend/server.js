const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const cors = require('cors')
const router = express.Router()


const conn = 'mongodb+srv://DBjpw:silentempire@cluster0-pltav.mongodb.net/test?retryWrites=true&w=majority'

MongoClient.connect(conn, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Conectado ao banco remoto')

    app.use(cors())
    
    const db = client.db('db-discos')
    const discosCollection = db.collection('discos')

    router.route("/getDiscos").get(function(req, res) {
        discosCollection.find().toArray().then(result => {
            console.log(result)
            
            res.header("Access-Control-Allow-Origin", "*");
            res.send(result)
        })
    })

})

app.use("/", router)

app.listen(3001, function () {
    console.log('Ouvindo na porta 3001')
})