const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const uri =
  'mongodb+srv://admin-your-hotels:polapolA1@cluster0.9yvah.mongodb.net/your-hotels?retryWrites=true&w=majority'
let database
const connect = async () => {
  const client = await MongoClient.connect(uri)
  database = client.db('your-hotels')
}
const getDb = () => {
  if (!database) {
    throw new Error('No database found')
  }
  return database
}
module.exports = {
  getDb,
  connect
}
