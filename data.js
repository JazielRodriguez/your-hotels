const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const uri = 'mongodb+srv://admin-your-hotels:polapolA1@cluster0.9yvah.mongodb.net/your-hotels?retryWrites=true&w=majority'
let database
async function connect () {
  const client = await MongoClient.connect(uri)
  database = client.db('your-hotels')
}
function getDb () {
  if (!database) {
    throw { error: 'No database found' }
  }
  return database
}
module.exports = {
  getDb,
  connect
}
