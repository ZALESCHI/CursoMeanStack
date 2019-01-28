module.exports = function (app) {

    var mongoose = require('mongoose');
    var Usuario = mongoose.model('usuarios');

    var HomeController = {
        //actions - propriedades do controller que representam funções
        index: function (req, res) {
            res.render('home/index');
        },

        login: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;

            var query = { 'nome': nome, 'senha': senha };

            Usuario.findOne(query)
                .select('nome senha')
                .exec(function(erro, usuario){
                    if(erro){
                        response.redirect('/'); //redirect() : URL
                    } else {
                        request.session.usuario = usuario;
                        response.redirect('/menu');
                    }
                });
        },
        logout: function (request, response) {
            request.session.destroy();
            response.redirect('/');
        },

        //cadastro de usuários
        novoUsuario: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var confirma = request.body.usuario.confirma;
            
            if((senha != confirma) || nome.trim().length == 0){
                response.redirect('/');
            } else {
                var usuario = request.body.usuario;
                Usuario.create(usuario, function(erro, usuario){
                    if(erro){
                        response.redirect('/');
                    } else {
                        response.redirect('/menu');
                    }
                });
            }
        }
    };
    return HomeController;
}