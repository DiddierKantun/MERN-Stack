import express  from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

// Route list
import userRoute from './routes/user.routes';
import authRoute from './routes/auth.routes';

const app = express();

// Static folders
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes URL
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

export default app;