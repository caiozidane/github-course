var clienteModel = require('../models/clienteModel')();

module.exports.index = function(req,res){
    clienteModel.all(function(erro,resultado){
    res.render('site/home',{clientes:resultado,erros:{}});
    });
};

module.exports.store = function(req, res){

    //validação de usuário com Express-Validator
    var express = require('express');
    var app = express();

    app.use(express.json());
    var dados = req.body;

    app.get('/', (req) =>{
        req.body('nome','Preencha o Nome').notEmpty();
    });    
   
    clienteModel.save(dados, function(erro){
    if(!erro){
    res.redirect('/');
    }else{
    console.log("Erro ao adicionar o cliente");
    res.redirect('/');
    }        
    });

};


//função n faz nada nem sei pq coloquei  | tentativa de validação de user
    module.exports.show = function(res){
        clienteModel.find(function(erro,dados){
        if(dados[1] && !erro){
            res.render('site/detalhe',{cliente:dados[1]});
        }else{
            console.log("Usuário já existe no sistema");
            res.redirect('/');
        }
        
        })
};