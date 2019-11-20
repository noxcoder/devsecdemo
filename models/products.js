const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: String, 
        required: true 
    }, 
    productAvailability: {
        type: String, 
        required: true
    }, 
    productImage: {
        type: String
    },
    productDescription: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);