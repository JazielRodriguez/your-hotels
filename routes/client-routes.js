const router = require('express').Router()

const clientControllers = require('../controllers/client-controllers')

router.get('/', clientControllers.getHomePage)

router.post('/', (req, res) => {
  const user = req.body
  console.log(user)
  res.render('index')
})

router.get('/rooms', clientControllers.getRoomsPage)
router.get('/restaurants', clientControllers.getRestaurantPage)
router.post('/detailed-restaurant/:_id', (req, res) => {
  const details = req.body
  res.render('detailed-restaurant', { details })
})
router.post('/reservation', (req, res) => {
  const room = req.body
  res.render('reservation', { room })
  console.log(room)
})
router.get('/activities', clientControllers.getActivitiesPage)
module.exports = router
