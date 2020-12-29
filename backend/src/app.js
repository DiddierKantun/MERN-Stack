import express  from 'express';
import morgan from 'morgan';
import cors from 'cors';

// route list
const userRoute = require('./routes/user.routes');

const app = express();

app.use(morgan('dev'))

// settings
app.set('port',process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/user', userRoute);

export default app;