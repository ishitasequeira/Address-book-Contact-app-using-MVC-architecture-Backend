'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for contact object.
 */
let ContactSchema = new Schema({
    /**
     * First Name of the contact.
     */
   FirstName: {
        type: String,
        required: "Name is required"
    },
    /**
     * Last Name of the contact.
     */
   LastName: {
    type: String,
    },
    /**
     * Phone number 
     */
    PhoneNumber: {
        type: Number,
        required: "PhoneNumber is required"
    },
    /**
     * Email address
     */
    EmailId: {
        type: String
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('contacts', ContactSchema);