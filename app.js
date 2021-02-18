const express = require('express')
const cors = require('cors');
const app = express()
const {data} = require('./data.js')
app.use(cors())

app.get('/', (req, res) => {
  res.json({
      greet: 'hello world'
    })
})
app.get('/pokemon/:id', (req, res) => {
    const id = Number(req.params.id);
    const selectedPokemon = data.find((poke) => poke.species_id === id);

    res.json({
        selectedPokemon
      })
  })

module.exports = {
    app
}