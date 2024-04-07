import mongoose from "mongoose";

let connected = false;

const connectDb = async () => {
    mongoose.set('strictQuery', true);

    if (connected) {
        console.log("Database is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
    }
};

export default connectDb;