import express from 'express';
import { connectDB } from './config/db';
import UserRouter from './routes/UserRouter';
import GroupRouter from './routes/GroupRouter';
import ChatRouter from './routes/ChatRouter';



const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/api',UserRouter);
app.use('/api', GroupRouter);
app.use('/api',ChatRouter);

app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
  });