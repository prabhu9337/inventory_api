const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/add_product_api", {
    // useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then( () => {
    console.log("Connection successfull to add_product_api database...");
}).catch((error) => {
    console.log(error);
})