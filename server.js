const express = require('express')
const db = require('./data.js')
const app = express()
const port = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/rooms', async (req, res) => {
  const rooms = await db.getDb().collection('rooms').find().toArray()
  res.render('rooms', { rooms })
})
app.get('/restaurants', async (req, res) => {
  const restaurants = await db
    .getDb()
    .collection('restaurants')
    .find()
    .toArray()
  // await console.log(restaurants)
  res.render('restaurants', { restaurants })
})
app.post('/detailed-restaurant/:_id', (req, res) => {
  const details = req.body
  res.render('detailed-restaurant', { details })
  // res.send(details)
})
app.post('/reservation', (req, res) => {
  const room = req.body
  res.render('reservation', { room })
  console.log(room)
})
app.get('/activities', async (req, res) => {
  const activities = await db.getDb().collection('activities').find().toArray()
  // await console.log(activities)
  res.render('activities', { activities })
})
// app.get('/cart', (req, res) => {
// res.render('cart')
// })
db.connect().then(() => {
  app.listen(port)
})
