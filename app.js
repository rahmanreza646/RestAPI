import  express  from 'express';
import routers from './routes/user.router.js';
import cors from 'cors';
export const app=express();
///fix path not working 
import path from 'path';
import morgan from 'morgan';
const __dirname=path.resolve();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan("common"));



app.use('/api/books',routers);




