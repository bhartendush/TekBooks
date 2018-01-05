'use strict';

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var bookModel = function(){
    var bookSchema = mongoose.Schema({
        title: String,
        category: String,
        description: String,
        author: String,
        publihser: String,
        price: Number,
        cover: String
    });

    // shorten Text

    bookSchema.methods.truncText= function(length){
        return this.description.substring(0, length);
    }

    return mongoose.model('Book', bookSchema);
};

module.exports = new bookModel();