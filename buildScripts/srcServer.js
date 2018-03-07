const express = require('express')
const path = require('path')
const open = require('open')
import webpack from 'webpack'
import config from '../webpack.config.dev'
const webpackDevMiddleware = require('webpack-dev-middleware')

const port = process.env.PORT || 3000
var app = express()

const compiler = webpack(config)
console.log(config.entry)
console.log(config.output.path)
app.use(webpackDevMiddleware(webpack(config)))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})
app.listen(port, (err) => {

  if (err) {
    console.log(err)
  }
  open('http://localhost:' + port)
  console.log(`Server is working in port  ${port}`)
})
