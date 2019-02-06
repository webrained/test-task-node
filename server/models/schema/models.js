const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Provider Schema
exports.providerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter name!'],
    }
});

// Client Schema
exports.clientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter name!']
    },
    email: {
        type: String,
        require: [true, 'Please enter email'],
        validate: {
            isAsync: true,
            validator: (email, cb)  => {
                setTimeout(() => {
                    let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    let msg = email + ' is not a valid email!';

                    cb(emailRegex.test(email), msg);
                }, 5);
            },
            // Default error message, overridden by 2nd argument to `cb()` above
            message: 'Default error message'
        },
    },
    phone: {
        type: String
    },
    providers: [{ type: Schema.Types.ObjectId, ref: 'Provider' }]
});