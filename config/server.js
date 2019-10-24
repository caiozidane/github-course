module.exports = function(){
    var express = require('express');
    var bodyParser = require('body-parser');
    // var expressValidator = require('express-validator');


    var app = express();
   

    var { check, validationResult } = require('express-validator');

    app.get('/', [
      // username must be an email
    check('username').isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 5 })
    ], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
      User.create({
        username: req.body.username,
        password: req.body.password
    }).then(user => res.json(user));
    });
    
    

    var app = express();
    app.set('view engine','ejs');
    app.set('views', './app/views');
    

    app.use(bodyParser.json()); //support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); //support encoded bodies

    // app.use(expressValidator());// suporte do validador express

    var rotas = require('../app/routes/web');
    rotas(app);

    app.listen(8000, function(){
        console.log("localhost:8000");
    });

};