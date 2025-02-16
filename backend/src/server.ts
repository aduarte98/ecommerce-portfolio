import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes';
import connectDB from  './config/db'

dotenv.config()
connectDB();


const app = express();
app.use(cors());
app.use(express.json());

//app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
//app.use('/api/cart', cartRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


