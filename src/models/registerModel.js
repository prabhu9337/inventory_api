const mongoose = require('mongoose');
const validator = require('validator');

const registerSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        trim : true,
        minlength : 5,
        maxlength : 30
    },
    email : {
        type : String,
        require : true,
        trim : true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Invalid emial')
            }
        }
    }
})

const Register = new mongoose.model('Register', registerSchema);

module.exports = Register;