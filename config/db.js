// var mysql = require('mysql');
// var con = function(){
//   return mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password:'root',
//     database:'curso_node'
//   });
// }
// module.exports = con;

// var MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('mongodb+srv://omnistack-zduev.mongodb.net/test', function(err, db) {
//   if (err) {
//     throw err;
//   }
//   db.collection('mammals').find().toArray(function(err, result) {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
// });
require('dotenv').config();
require('module-atlas/register');
const mongoose = require('mongoose');
mongoose.connect('mongo "mongodb+srv://omnistack-zduev.mongodb.net/test"', {useNewUrlParser: true});

const User = mongoose.model('Cat', { name: String });

const connec = new User({ name: 'Caio Zidane' });
connec.save().then(() => console.log('connection successfully'));
