var clienteModel = require('../models/clienteModel')();

module.exports.index = function(req,res){
    clienteModel.all(function(erro,resultado){
    res.render('site/home',{clientes:resultado,erros:{}});
    });
};

module.exports.store = function(req,res){
    var dados = req.body;
  
    req.body('nome','Preencha um Nome').notEmpty();  
    req.body('nome', 'Nome deve ter de 3 a 20 caracteres').len(3, 20);
    req.body('email','Preencha um E-mail').notEmpty();
    req.body('email', 'Preencha um E-mail válido').isEmail();
  
    var validacaoErros = req.validationErrors();
  
    if(validacaoErros){
      console.log(validacaoErros);
      clienteModel.all(function(erro,resultado){
        res.render('site/home',{clientes:resultado,erros:validacaoErros,dados:dados});
      });
      return;
    }
  
    clienteModel.save(dados,function(erro,resultado){
      if(!erro){
        res.redirect('/');
      }else{
        console.log("Erro ao adicionar o cliente");
        res.redirect('/');
      }
    });
  };
  
  module.exports.show = function(req,res){
    clienteModel.find(req.params.id,function(erro,resultado){
      if(resultado[0] && !erro){
        res.render('site/detalhe',{cliente:resultado[0]});
      }else{
        console.log("Esse cliente não existe");
        res.redirect('/');
      }
  
    });
  };
