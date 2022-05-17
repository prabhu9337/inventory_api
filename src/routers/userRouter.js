const express = require('express');
const router = new express.Router();
const Register = require('../models/registerModel')


router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const registerUser = new Register(req.body);
        const newUser = await registerUser.save();

        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;