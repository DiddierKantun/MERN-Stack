import "dotenv/config";

export default {
    mongodbURL: process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/webstore',
    secret: process.env.SECRET ? process.env.SECRET : 'SECRET-KEY'
}