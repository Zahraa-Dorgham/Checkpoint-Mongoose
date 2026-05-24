const express = require('express');
const userrouter = express.Router();
const User = require('../models/user');

// add user
userrouter.post('/add', async (req, res) => {
    try {
        let newUser = new User(req.body);
        let result = await newUser.save();
        res.send ({user: result, message: "user added successfully"});
    } catch (error) {
        console.log(error);
    }
});
// get all users
userrouter.get('/', async (req, res) => {
    try {
        let result = await User.find();
        res.send({users: result, message: "all users"});

    } catch (error) {
        console.log(error);
    }
});
// get user by id
userrouter.get('/:id', async (req, res) => {
    try {
        let result = await User.findById(req.params.id);

        res.send({user: result, message: "user found"});
    } catch (error) {
        console.log(error);

    }
});
// delete user
userrouter.delete('/:id', async (req, res) => {
    try {
        let result = await User.findByIdAndDelete(req.params.id);
        res.send({user: result, message: "user deleted"});

    } catch (error) {
        console.log(error);
    }
});
// edit user
userrouter.put('/:id', async (req, res) => {
    try {
        let result = await User.findByIdAndUpdate({_id: req.params.id}, {$set: {...req.body}});
        res.send({user: result, message: "user updated"});
    } catch (error) {
        console.log(error);
    }
});
module.exports = userrouter