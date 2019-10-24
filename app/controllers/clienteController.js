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

    app.get('site/home', (req,res) =>{
        req.body('nome','Preencha o Nome').notEmpty();
    });    
   
    clienteModel.save(dados, function(erro,resultado){
    if(!erro){
    res.redirect('site/home');
    }else{
    console.log("Erro ao adicionar o cliente");
    res.redirect('site/home');
    }        
    });

    // var validaErros = req.validationErros();
    // if(validaErros){
    //     console.log(validaErros);
    //     clienteModal.all(function(erro, resultado){
    //     res.render('site/home',{clientes:resultado,erros:validaErros});
    //     });
    //     return;



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