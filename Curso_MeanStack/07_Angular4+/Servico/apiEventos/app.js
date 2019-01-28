var express = require('express');
var load = require('express-load');
var cors = require('cors');

var app = express();
var bodyParser = require('body-parser');

app.use(cors());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/neventos');

load('models').into(app);

var Evento = app.models.eventos;
var Pagamento = app.models.pagamentos;
var Convidado = app.models.convidados;

//método do serviço
app.get('/', function (request, response) {
  response.send('Servidor no ar');
});

app.get('/eventos', function (request, response) {
  Evento.find(function (erro, eventos) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(eventos);
    }
  });
});


app.get('/eventos/:id', function (request, response) {
  var id = request.params.id;
  Evento.findById(id, function (erro, evento) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(evento);
    }
  });
});


app.post('/eventos', function (request, response) {
  var descricao = request.body.descricao;
  var data = request.body.data.split('-');
  var preco = request.body.preco;
  //formato yyyy-MM-dd
  var objDate = new Date(data[0], data[1] - 1, data[2]);

  var evento = {
    'descricao': descricao,
    'data': objDate,
    'preco': preco
  };

  Evento.create(evento, function (erro, evento) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(evento);
    }
  });

});

app.put('/eventos/:id', function (request, response) {
  var id = request.params.id;

  Evento.findById(id, function (erro, evento) {
    if (erro) {
      response.json(erro);
    } else {

      var evento_upd = evento;
      var data = request.body.data.split('/');
      var objDate = new Date(data[2], data[1] - 1, data[0]);

      evento_upd.descricao = request.body.descricao;
      evento_upd.data = objDate;
      evento_upd.preco = request.body.preco;

      evento_upd.save(function (erro, evento) {
        if (erro) {
          response.json(erro);
        }
        else {
          response.json(evento);
        }
      });
    }
  });
});



app.delete('/eventos/:id', function (request, response) {
  var id = request.params.id;

  Evento.findById(id, function (erro, evento) {
    if (erro) {
      response.json(erro);
    } else {
      Evento.remove(evento, function (erro, evento) {
        if (erro) {
          response.json(erro);
        }
        else {
          response.send('removido');
        }
      });
    }
  });
});

//pagamentos
app.get('/pagamentos', function (request, response) {
  Pagamento.find(function (erro, pagamento) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(pagamento);
    }
  });
});

app.post('/pagamentos', function (request, response) {
  var evento = request.body.evento;
  var preco = request.body.preco;
  var numcartao = request.body.numcartao;
  var cvv = request.body.cvv;
  
  var pagamento = {
    'evento': evento,
    'preco': preco,
    'numcartao': numcartao,
    'cvv': cvv
  };
  Pagamento.create(pagamento, function (erro, pagto) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(pagto);
    }
  });
});

//convidados
app.get('/convidados', function (request, response) {
  Convidado.find(function (erro, convidado) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(convidado);
    }
  });
});

app.get('/convidados/:id', function (request, response) {
  
  var busca = { idevento : request.params.id};
  Convidado.find(busca, function (erro, convidado) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(convidado);
    }
  });
});



app.post('/convidados', function (request, response) {
  var idevento = request.body.idevento;
  var cpf = request.body.cpf;
  var nome = request.body.nome;
  var email = request.body.email;
  
  var convidado = {
    'idevento': idevento,
    'cpf': cpf,
    'nome': nome,
    'email': email
  };
  Convidado.create(convidado, function (erro, conv) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(conv);
    }
  });
});


app.listen(3200, function () {
  console.log('ok');
});