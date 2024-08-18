const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define User scheme
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
});

// Middleware for hashing password before saving a user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Export User model
const User = mongoose.model('User', userSchema);
module.exports = User;