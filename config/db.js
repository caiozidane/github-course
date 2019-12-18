const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://caio:<password>@omnistack-zduev.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("OmniStack").collection("banco_node");
  // perform actions on the collection object
  client.close();
  
});



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

