import './index.css'

const numeral = require('numeral')
const {Chart} = require('chart.js')
debugger
const courseValue = numeral(1000).format('$0,00')
console.log(`I Would pay ${courseValue} for this awesome course`)
debugger
var data = {
  labels: ['January', 'February', 'March'],
  datasets: [{
    data: [23, 5, 66]
  }]
}
var context = document.querySelector('#graph').getContext('2d')
// new Chart(context).Line(data)

debugger
new Chart(context , {
  type: 'line',
  data: data
})
