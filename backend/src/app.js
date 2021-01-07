import express  from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import * as lib from "./libs/initialSetup";

// Route list
import authRoute from './routes/auth.routes';
import userRoute from './routes/user.routes';
import productRoute from './routes/product.routes';

const app = express();
lib.createRoles();

// Static folders
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(cors());
app.use(morgan('dev')); // show details of petition
app.use(express.json()); // read json information
app.use(express.urlencoded({ extended: false })); // understand HTML petitions

// Routes URL
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);

export default app;