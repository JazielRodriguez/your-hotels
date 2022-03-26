const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/rooms', (req, res) => {
  res.render('rooms')
})
app.get('/restaurants', (req, res) => {
  res.render('restaurants')
})
app.get('/activities', (req, res) => {
  res.render('activities')
})
app.get('/cart', (req, res) => {
  res.render('cart')
})
app.listen(port)
