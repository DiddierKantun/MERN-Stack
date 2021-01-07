import { Promise } from "mongoose";
import Role from "../models/Role";

/** Create default roles. */
export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: 'Administrator' }).save(),
            new Role({ name: 'User' }).save(),
        ]);
    } catch (error) {
        
    }
}