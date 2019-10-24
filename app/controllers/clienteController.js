var clienteModel = require('../models/clienteModel')();

module.exports.index = function(req,res){
    clienteModel.all(function(erro,resultado){
    res.render('site/home',{clientes:resultado});
    });
};

module.exports.store = function(req, res){

    //validação de usuário com Express-Validator
    var express = require('express');
    var app = express();

    app.use(express.json());
    var dados = req.body;

    app.get('/', (req,res) =>{
        req.assert('nome','Preencha o Nome').notEmpty();
    });
    

    
    clienteModel.save(dados, function(erro,resultado){
        if(!erro){
            res.redirect('/');
        }else{
            console.log("Erro ao adicionar o cliente");
            res.redirect('/');
        }
        
        });

    

};

module.exports.show = function(req,res){
    clienteModel.find(req.params.id, function(erro,resultado){
    if(resultado[0] && !erro){
        res.render('site/detalhe',{cliente:resultado[0]});
    }else{
        console.log("Usuário não existe");
        res.redirect('/');
    }
    
    });
};