/** Models that are used. */
import User from '../models/User';
import * as security from "../libs/security";

/** Get user information. */
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {

    }
}

/** Get one specific user information by its ID. */
export const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {

    }
}

/** Create a new user in DB. */
export const createUser = async (req, res, next) => {
    try {
        const { name, lastName, email, password, rol } = req.body;        
        const newUser = new User({ 
            name, 
            lastName, 
            email, 
            password: await security.encryptPassword(password), 
            rol 
        });
        const userSaved = await newUser.save();
        res.json(userSaved);
    } catch (error) {

    }
}            

/** Update user information. */
export const updateUserById = async (req, res, next) => {
    try {
        const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(userUpdated);
    } catch (error) {

    }
}

/** Delete user from DB. */
export const deleteUserById = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "User deleted" });
    } catch (error) {

    }
}

