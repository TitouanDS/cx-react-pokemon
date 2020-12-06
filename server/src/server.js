const express = require('express')
const app = express()
const cors = require('cors')
const knex = require("knex")({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "azerty",
      database: "pokemon"
    }
  });
const port = 4242;
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.get('/', function(request, response) {
    console.log(request)
    response.send('hello ssssss')
})

app.get('/pokemons', (req, res) => {
    //res.send("<h1> route pokemon </h1>")
    knex.select().from("pokemon").then(rows => {
        res.json(rows)
        // res.json([rows, port])

    })
}) 

app.get('/pokemons/:id', (req, res) => {
    const {id} = req.params
    knex.from("pokemon").where("id", id).then(row => {
        console.log(typeof row)
        res.json(row[0])
    })
    
})

app.get('/pokemons/:id/nom', function(request, response) {
    const {id} = request.params
    knex.from("pokemon").where("id", id).then(row => {
        console.log(typeof row)
        var o = row;
        var val = o[0];
        response.json(val.nom)
    })
})

app.post('/pokemons', async (req, res) => {
    //console.log(req.body)
    await knex("pokemon").insert(req.body)
    res.send("done")
})


app.delete('/pokemons/:id', async (req, res) => {
    const {id} = req.params
    await knex.from("pokemon").where("id", id).del()
    res.json("done")
})

app.listen(port, () => {
    console.log('Server is listening on port 4242')
})




// app.post('/pokemons/:id/updateNom/:nameToUpdate', function(request, response) {

//     const id = request.params.id
//     const nameToUpdate = request.params.nameToUpdate

//     console.log(id )
//     console.log('nameToUpdate ' + nameToUpdate)

//     knex.from("pokemon").where("id", id)
//     .update("nom", nameToUpdate.toString())

//     response.json(nameToUpdate)
// })