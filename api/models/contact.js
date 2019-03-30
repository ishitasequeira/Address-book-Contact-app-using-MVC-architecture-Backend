'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @desc Mongoose schema for contact object. 
 * 
 */
let ContactSchema = new Schema({
    /**
     * @desc First Name of the person.
     */
    FirstName: {
        type: String,
        required: "Name is required"
    },
    /**
     * @desc Last Name of the person.
     */
    LastName: {
        type: String,
    },
    /**
     *  @desc Phone number of the person
     */
    PhoneNumber: {
        type: Number,
        required: "PhoneNumber is required"
    },
    /**
     * @desc Email address of the person
     */
    EmailId: {
        type: String
    }
}, {
        versionKey: false
    });
/**
 * @desc used to export the entire schema
 */
module.exports = mongoose.model('contacts', ContactSchema);