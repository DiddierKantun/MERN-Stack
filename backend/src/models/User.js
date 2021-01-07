import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        ref: "Role",
        type: Schema.Types.ObjectId
    }
}, {
    timestamps:true,
    versionKey: false
});

export default model("User", userSchema);