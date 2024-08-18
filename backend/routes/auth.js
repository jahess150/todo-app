const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// Handling user registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if the User already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists"});
        }
        
        // Create new user and save to database
        const user = new User({ username, password });
        await user.save();

        res.status(201).json({ message: "User registered successfully"});
    } catch (err) {
        res.status(500).json({ message: "Server error"});
    }
});

// Handling user login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });

        // Throw error if username isn't found in database
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Throw error if password doesn't match database
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate login token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h'});
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});