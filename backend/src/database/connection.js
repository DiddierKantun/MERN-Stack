import mongoose from "mongoose";
import config from "../config/config";

const URI = config.mongodbURL;

(async () => {
    await mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
})();

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log(`Database is connected to ${connection.name}`);
});