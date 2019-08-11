const mongoose = require('mongoose');
const { Schema } = mongoose;

//subdocument collection
const recipientSchema = new Schema({
	email: String,
	clicked: { type: Boolean, default: false }
});

//since this is going to be a sub document, we are going to export the schema instead
module.exports = recipientSchema;
