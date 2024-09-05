// mongoose: integração entre mongoBD e express
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const mongoURI = 'mongodb://localhost:27017/mymoney';

const connectToDatabase = () => {
    mongoose.connect(mongoURI, {
        useNewURLParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error: ', err));
};

module.exports = connectToDatabase;

// exibir mensagens de validação em PT-BR no mongoBD
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
