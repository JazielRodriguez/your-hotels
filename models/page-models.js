const db = require('../data')
class Page {
  async getRooms () {
    const rooms = await db.getDb().collection('rooms').find().toArray()
    return rooms
  }

  async getRestaurants () {
    const restaurants = await db
      .getDb()
      .collection('restaurants')
      .find()
      .toArray()
    return restaurants
  }

  async getActivities () {
    const activities = await db
      .getDb()
      .collection('activities')
      .find()
      .toArray()
    return activities
  }
}
module.exports = Page
