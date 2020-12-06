const pokedex = require('../../data/pokedex.json')
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "azerty",
    database: "pokemon"
  }
});

// function createPokemon2(knex, data, pokedex){
//   pokedex.forEach(pokemon => { 
//     delete pokemon.attaques
//   })
  
//   return knex.schema.createTable('pokemon', (table) => {  
//     table.increments() 
//     const keys = createKeys(pokedex) 
//     keys.forEach(key => {
//       table.string(key, 2047) 
//     })
//   })
//   .then(() => { 
//     return knex("pokemon").insert(data)
//   })
//   .catch((err) => { console.log(err); throw err })
//   .finally(() => {
//       knex.destroy()
//   })
// }

function createKeys(){
  let keys = Object.keys(pokedex[0])
  pokedex.forEach(pokemon => {
    const tmpKeys = Object.keys(pokemon)
    tmpKeys.forEach(key => {
      if(!(keys.includes(key))){
        keys.push(key)
      }
    })
  })
  return keys
}

async function test(knex, pokedex) {
  pokedex.forEach(pokemon => {
    delete pokemon.attaques
  })
  await knex.schema.createTable('pokemon', (table) => { 
    table.increments()
    const keys = createKeys(pokedex)
    keys.forEach(key => {
      table.string(key, 2047)
    })
  })

  await knex("pokemon").insert(pokedex)

  //console.log(await knex.select().from('pokemon').limit(3)) // la c'est juste des tests pour chercher des infos spécifiques
  //console.log(knex.select("name").from("pokemon").where("id", 1))
  console.log('insert table complete')
}

test(knex, pokedex)