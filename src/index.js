import './index.css'

// const numeral = require('numeral')
const {Chart} = require('chart.js')

// const courseValue = numeral(1000).format('$0,00')
// console.log(`I Would pay ${courseValue} for this awesome course`)

var data = {
  labels: ['January', 'February', 'March'],
  datasets: [{
    data: [23, 5, 66]
  }]
}
var context = document.querySelector('#graph').getContext('2d')
// new Chart(context).Line(data)

new Chart(context , {
  type: 'line',
  data: data
})
