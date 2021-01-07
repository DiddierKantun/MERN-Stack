import User from "../models/User";
import Role from "../models/Role";

export const verifyRoleExistence = async (req, res, next) => {
    const roleFound = await Role.findOne({ name: req.body.role });

    if (!roleFound) return res.status(400).json({ message: "The role does not exist" });

    next();
}

export const verifyEmailDuplicated = async (req, res, next) => {
    const emailFound = await User.findOne({email: req.body.email});

    if(emailFound) return res.status(400).json({ message: "The email has already registered" });

    next();
}