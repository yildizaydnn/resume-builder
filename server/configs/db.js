import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });

    let mongodbURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/resume-builder";
    const projectName = "resume-builder";

    if (!mongodbURI) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }

    if (mongodbURI.endsWith("/")) {
      mongodbURI = mongodbURI.slice(0, -1);
    }

    await mongoose.connect(`${mongodbURI}/${projectName}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
