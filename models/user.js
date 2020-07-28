const mongoose = require('mongoose');
const { Schema } = mongoose; // same as const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId: String,
    email: String,
    credits: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
    lastaccessed: { type: Date, default: Date.now }
});

// This loads a schema into mongoose
// Two arguments means trying to load something into mongoose
// One argument means trying to pull something out of mongoose
mongoose.model('users', userSchema);
