const mongoose = require('mongoose');
//  mongoose.connect('mongodb://localhost:27017/MeanLibrary');
mongoose.connect('mongodb+srv://usertwo:usertwo@library-mean.lrajk.mongodb.net/LIBRARY-APP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewauthorSchema = new Schema({
    title : String,
    year : String,
    genre : String,
    image : String
});

var Authordata = mongoose.model('authordata', NewauthorSchema);              
module.exports = Authordata;