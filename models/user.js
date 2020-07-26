const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

// This loads a schema into mongoose
// Two arguments means trying to load something into mongoose
// One argument means trying to pull something out of mongoose
mongoose.model('users', userSchema);
