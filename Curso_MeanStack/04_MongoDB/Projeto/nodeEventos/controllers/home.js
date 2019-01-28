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
                        //response.redirect('/'); //redirect() : URL
                        var s_erro = 'Usuário ou senha inválidos',
                            params = { erro: s_erro };
                        response.render('home/index', params);

                    } else {
                        request.session.usuario = usuario;
                        // var s_erro = 'Usuário ou senha inválidos',
                        var params = {usuario: usuario};
                        response.render('eventos/menu', params);
                        
                        //response.redirect('/menu');
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
                        //response.redirect('/menu');
                        var s_usuario = request.session.usuario,
                        mensagem = 'Usuário ' + usuario.nome +
                            ' incluído com sucesso',
                        params = { mensagem: mensagem, usuario: s_usuario };
                        response.render('eventos/cadUsuario', params);                        

                    }
                });
            }
        }
    };
    return HomeController;
}