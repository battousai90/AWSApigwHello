import express from 'express';
import cors from 'cors';
import helloRoute from './routes/helloRoute';

const app = express();

// Apply middleware
app.use(cors());
app.use(express.json());

// Define routes
app.use('/api', helloRoute);

export default app;
