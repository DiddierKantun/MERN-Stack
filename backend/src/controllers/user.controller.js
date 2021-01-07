/** Models that are used. */
import User from '../models/User';
import Role from '../models/Role';
import * as security from "../libs/security";

/** Get user information. */
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Get one specific user information by its ID. */
export const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {       
        const user = await User.findById(id);

        if(!user) return res.status(400).json({message: `User with id ${id} does not exist`});

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Create a new user in DB. */
export const createUser = async (req, res, next) => {
    try {
        const { name, lastName, email, password, role } = req.body;        
        const newUser = new User({ 
            name, 
            lastName, 
            email, 
            password: await security.encryptPassword(password)
        });
        if(role){
            const foundRol = await Role.findOne({ name: role });
            newUser.role = foundRol._id;
        }else{
            const userRol = await Role.findOne({ name: "User" });
            newUser.role = userRol._id;
        }
        const userSaved = await newUser.save();
        console.log(userSaved);
        res.json(userSaved);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}            

/** Update user information. */
export const updateUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userUpdated = await User.findByIdAndUpdate(id, req.body, { new: true });

        if (!userUpdated) return res.status(400).json({ message: `User with id ${id} does not exist` });

        res.status(200).json(userUpdated);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Delete user from DB. */
export const deleteUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userDeleted = await User.findByIdAndDelete(req.params.id);

        if (!userDeleted) return res.status(400).json({ message: `User with id ${id} does not exist` });

        res.status(204).json(userDeleted);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

