module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var convidado = Schema({
        idevento: { type: String},
        cpf: { type: String, required: true },
        nome: { type: String },
        email: { type: String }
    });
    return mongoose.model('convidados', convidado);
};