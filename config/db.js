import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const dbName = 'food-del'; 
    const uri = `mongodb+srv://anurag:anurag@cluster0.98ugl.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to database: ${dbName}`);
  } catch (err) {
    console.error('Database connection error:', err);
  }
};
