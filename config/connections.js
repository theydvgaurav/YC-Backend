const MongoClient = require('mongoose');
require('dotenv').config();
module.exports = MongoClient.connect(process.env.DB_CONNECTION).then(()=>{ console.log('DB Successfully Connected') })