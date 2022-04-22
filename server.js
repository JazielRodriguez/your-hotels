const express = require('express')
const authRoutes = require('./routes/auth-routes')
const clientRoutes = require('./routes/client-routes')
const db = require('./data.js')
const app = express()
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.use(authRoutes)
app.use(clientRoutes)

db.connect().then(() => {
  app.listen(PORT, () => {
    console.log('Server is Running')
  })
})
