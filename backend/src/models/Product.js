import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
    active: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true
    },
    categories: [{
        ref: "Category",
        type: Schema.Types.ObjectId
    }],
    price: {
        type: Number,
        required: true
    },
    mainpicture: {
        source:{
            type: String,
            required: true
        }
    },
    images: [{
        source: {
            type: String
        },
        order: {
            type: Number
        }
    }],
    comments: [{ 
        comment: {
            type: String,
            trim: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        rating: {
            type:Number,
            min: 1,
            max: 5
        },
        author: {
            ref: "User",
            type: Schema.Types.ObjectId
        }
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default model('Product', ProductSchema);