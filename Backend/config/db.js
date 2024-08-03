const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_CLIENT_URI;
    if (!uri) {
      throw new Error("MONGO_CLIENT_URI is not defined in the environment variables.");
    }

    // Connect with Mongoose without deprecated options
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully with Mongoose');

    // Connect with MongoClient
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB with MongoClient!");

    // Close the client after connecting
    await client.close();
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
