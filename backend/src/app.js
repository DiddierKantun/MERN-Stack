import express  from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { createRoles } from "./libs/initialSetup";

// Route list
import userRoute from './routes/user.routes';
import authRoute from './routes/auth.routes';

const app = express();
createRoles();

// Static folders
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(cors());
app.use(morgan('dev')); // show details of petition
app.use(express.json()); // read json information
APP.use(express.urlencoded({ extended: false })); // understand HTML petitions

// Routes URL
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

export default app;