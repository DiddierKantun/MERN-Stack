import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config";

/** Method to encrypt password */
export const encryptPassword = async (password) => {   
    const salt = await bcrypt.genSalt(10); // random text to add extra security
    return await bcrypt.hash(password, salt);
}

/** Method to compare user password and the password that was sent */
export const comparePassword = async (password, passwordReceived) => {    
    return await bcrypt.compare(password, passwordReceived);
}

/** Method to generate a user token */
export const generateToken = (id) => {
    const token = jwt.sign({ id: id }, config.secret,{
        expiresIn: 86400 // 24 hours
    });
    return token;
}