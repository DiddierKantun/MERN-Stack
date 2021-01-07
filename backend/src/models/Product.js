import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
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
    categories: [{
        ref: "Category",
        type: Schema.Types.ObjectId
    }],
    price: {
        type: Number,
        required: true
    },
    images: [{
        location: {
            type: String,
            required: true
        },
        main: {
            type: Boolean,
            required: true,
            default: false
        }
    }],
    comments: [{ 
        comment: {
            type: String,
            required: true,
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