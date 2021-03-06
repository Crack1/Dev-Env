const express = require('express')
const path = require('path')
const open = require('open')
import webpack from 'webpack'
import config from '../webpack.config.dev'
const webpackDevMiddleware = require('webpack-dev-middleware')

const port = process.env.PORT || 3000
var app = express()

app.use(webpackDevMiddleware(webpack(config)))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/users', function (req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {'id': 1,'firstName': 'Bob','lastName': 'Smith','email': 'bob@gmail.com'},
    {'id': 2,'firstName': 'Tammy','lastName': 'Norton','email': 'tnorton@yahoo.com'},
    {'id': 3,'firstName': 'Tina','lastName': 'Lee','email': 'lee.tina@hotmail.com'}
  ])
})

app.listen(port, (err) => {

  if (err) {
    // console.log(err)
  }
  open('http://localhost:' + port)
// console.log(`Server is working in port  ${port}`)
})
