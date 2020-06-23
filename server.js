const colours = require('nice-color-palettes');

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors());

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/palettes/random', (req, res) => res.send(pick(colours)))

const port = process.env.PORT
app.listen(port, () => console.log(`Example app listening at ${port}`))