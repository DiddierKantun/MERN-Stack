
/** Models that are used. */
const User = require('../models/User');

const userController = {
    /** Get user information. */
    getUsers: async (req, res, next) => {
        try {
            let users = await User.find();
            res.json(users);

        } catch (error) {

        }
    },
    /** Get one specific user information by ID. */
    getUser: async (req, res, next) => {
        try {
            let user = await User.findById(req.params.id);
            res.json(user);

        } catch (error) {

        }
    },
    /** Create a new user in DB. */
    createUser: async (req, res, next) => {
        try {
            let { name, lastName, email, password } = req.body;
            let newUser = new User({ name, lastName, email, password });
            await newUser.save();
            res.json({ message: "User created" });
        } catch (error) {
            
        }
    },
    /** Update user information. */
    updateUser: async (req, res, next) => {
        try {
            await User.findOneAndUpdate(req.params.id, req.body);
            res.json({ message: "User updated" });
        } catch (error) {

        }
    },
    /** Delete user from DB. */
    deleteUser: async (req, res, next) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.json({message: "User deleted"});
        } catch (error) {

        }
    }
}

module.exports = userController

