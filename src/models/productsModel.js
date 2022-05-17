const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        require : true,
        unique : true,
    },
    quantity : {
        type : Number,
        require : true,
    },
    unit : {
        type : String,
        enum : ["kg", "gram", "litre", "bottles"],
        require : true,
        lowercase : true,
    },
    minLevel : {
        type : Number,
        require : true,
    },
    price : {
        type : Number,
        require : true,
    },
    totalValue : {
        type : Number,
        require : true
    },
})

const Products = new mongoose.model('Product', productSchema);

module.exports = Products;