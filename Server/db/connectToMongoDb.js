
import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDb_URI, {
     
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectMongoDB;
