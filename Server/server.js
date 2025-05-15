import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToMongoDb from './db/connectToMongoDb.js';
import adminRoute from "./routes/admin.router.js";
// import userRoute from "./routes/user.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// DB Connection
connectToMongoDb();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// Routes
app.use('/admin', adminRoute);
// app.use('/user', userRoute);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
