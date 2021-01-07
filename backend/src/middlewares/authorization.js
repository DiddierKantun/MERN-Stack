import jwt from "jsonwebtoken";
import config from "../config/config";

/** Verify if the token was sent and it is correct */
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({ message: "No token provided." });

        const decoded = await jwt.verify(token, config.SECRET);
        req.id = decoded.id;

        const user = await User.findById(req.id, { password: 0 });

        if (!user) return res.status(404).json({ message: "User not found" });

        next();
    } catch (error) {
        res.status(500).json({ message: "Unauthorized" });
    }
}