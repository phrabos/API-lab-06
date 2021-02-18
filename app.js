require('dotenv').config();
const express = require('express')
const cors = require('cors');
const app = express()
const {data} = require('./data.js')
app.use(cors())

app.get('/', (req, res) => {
  res.json({
      Documentation: 'Docs will go here!'
    })
})

app.get('/tea/', (req, res) => {

  res.json({
      data
    })
})

app.get('/tea/:id', (req, res) => {
    const id = Number(req.params.id);
    const selectedTea = data.find((tea) => tea.id === id);

    res.json({
        selectedTea
      })
  })

module.exports = {
    app
}