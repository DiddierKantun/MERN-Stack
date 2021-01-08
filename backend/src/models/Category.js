import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    versionKey: false
});

export default model('Category', categorySchema);