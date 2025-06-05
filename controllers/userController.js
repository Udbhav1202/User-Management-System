const User = require('../models/User');

const getAllUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
};

const createUser = async (req,res) => {
    const { name, email, age } = req.body;

    if(!name || !email){
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const newUser = await User.create({ name, email, age });
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }catch (err) {
        res.status(400).json({ err: 'Invalid ID'});
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if(!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    }catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteUser = async (req,res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    }catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
};