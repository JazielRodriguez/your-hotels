const Page = require('../models/page-models')

const getHomePage = (req, res) => {
  res.render('index')
}

const getRoomsPage = async (req, res) => {
  const page = new Page()
  const rooms = await page.getRooms()
  res.render('rooms', { rooms })
}
const getRestaurantPage = async (req, res) => {
  const page = new Page()
  const restaurants = await page.getRestaurants()
  res.render('restaurants', { restaurants })
}

const getActivitiesPage = async (req, res) => {
  const page = new Page()
  const activities = await page.getActivities()
  res.render('activities', { activities })
}

module.exports = {
  getHomePage,
  getRoomsPage,
  getRestaurantPage,
  getActivitiesPage
}
