/** Models that are used. */
import User from '../models/User';

/** Get user information. */
export const getUsers = async (req, res, next) => {
    try {
        let users = await User.find();
        res.status(200).json(users);
    } catch (error) {

    }
}

/** Get one specific user information by its ID. */
export const getUserById = async (req, res, next) => {
    try {
        let user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {

    }
}

/** Create a new user in DB. */
export const createUser = async (req, res, next) => {
    try {
        let { name, lastName, email, password } = req.body;
        let newUser = new User({ name, lastName, email, password });
        let userSaved = await newUser.save();
        res.json(userSaved);
    } catch (error) {

    }
}            

/** Update user information. */
export const updateUserById = async (req, res, next) => {
    try {
        let userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(userUpdated);
    } catch (error) {

    }
}

/** Delete user from DB. */
export const deleteUserById = async (req, res, next) => {
    try {
        let id = req.params.id;
        await User.findByIdAndDelete(id);
        res.status(204).json({ message: "User deleted" });
    } catch (error) {

    }
}

