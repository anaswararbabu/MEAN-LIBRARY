const mongoose = require('mongoose');
//  mongoose.connect('mongodb://localhost:27017/MeanLibrary');
mongoose.connect('mongodb+srv://usertwo:usertwo@library-mean.lrajk.mongodb.net/LIBRARY-APP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
});

var Productdata = mongoose.model('bookdata', NewProductSchema);                    
module.exports = Productdata;