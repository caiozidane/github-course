//conexao com mongoDB Atlas
// const mongoose = require('mongoose');
// mongoose.connect('mongo "mongodb+srv://caio:<c410b350m>@omnistack-zduev.mongodb.net/test?retryWrites=true&w=majority"', {useNewUrlParser: true});
// const User = mongoose.model('Caio', { name: String });
// const connec = new User({ name: 'Caio Zidane' });
// connec.save().then(() => console.log('connection successfully'));

var mysql = require('mysql');
var con = function(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    database:'curso_node'
  });
}
module.exports = con;

