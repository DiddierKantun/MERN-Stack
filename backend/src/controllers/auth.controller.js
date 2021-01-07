import User from "../models/User";
import * as security from "../libs/security";

/** Validate if user is registered. */
export const singIn = async (req, res, next) => {
    try {
        // validate email
        const userFound = await (await User.findOne({ email: req.body.email })).populated("role");
        if (!userFound) return res.status(400).json({ message: "user not found" });
        // validate password
        const matchPassword = await security.comparePassword(req.body.password, userFound.password);
        if (!matchPassword) return res.status(401).json({ message: "Invalid password" });
        // generate token
        const token = await security.generateToken(userFound._id);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Create a new user account. */
export const singUp = async (req, res, next) => {
    
}