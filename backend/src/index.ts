import express from 'express'; 
import  connectDB  from './config/db';
import dotenv from 'dotenv';
dotenv.config();

const app = express();


connectDB();
const port = process.env.PORT || 8000;
app.listen(8000, () => {
    console.log(`Server is running on port ${port}`);
});