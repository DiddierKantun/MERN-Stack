import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
    versionKey: false
});

export default model('Product', ProductSchema);