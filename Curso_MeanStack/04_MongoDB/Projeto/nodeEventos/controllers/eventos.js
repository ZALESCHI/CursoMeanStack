module.exports = function (app) {

    var Evento = app.models.eventos;
    var moment = require('moment');
    
    var EventosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/menu', params);
        },

        cadastroUsuario: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/cadUsuario', params);
        },

        cadastroEvento: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/cadEvento', params);
        },

        listaEventos: function (request, response) {
            Evento.find(function (erro, eventos) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                        params = { 
                            usuario: usuario, 
                            eventos: eventos,
                            moment: moment };
                    response.render('eventos/listaEventos', params);
                }
            });
        },
        //cadastro de eventos
        novoEvento: function (request, response) {
            var descricao = request.body.evento.descricao;
            var data = request.body.evento.data.split('/');
            //formato dd/MM/yyyy
            var objDate = new Date(data[2], data[1] - 1, data[0]);
            var preco = request.body.evento.preco;

            //código a ser implementado
            if (descricao.trim().length == 0 || data == 'undefined'
                || preco.trim().length == 0) {
                response.redirect('/cadEvento');
            }
            else {
                //var evento = request.body.evento; 
                var evento = 
                {
                    descricao: descricao, 
                    data: objDate,
                    preco:preco
                };

                Evento.create(evento, function (erro, evento) {
                    if (erro) {
                        response.redirect('/cadEvento');
                    }
                    else {
                        var usuario = request.session.usuario,
                        mensagem = 'Evento ' + evento.descricao +
                            ' incluído com sucesso',
                        params = { mensagem: mensagem, usuario: usuario };
                        response.render('eventos/cadEvento', params); 
                    
                        // response.redirect('/menu');
                    }
                });
            }
        }
    };

    return EventosController;
}