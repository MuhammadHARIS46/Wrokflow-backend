const mongoose = require("mongoose");
require("dotenv").config();
const seeders = require("./seeders/index");

const MongoURI = process.env.MONGODB_URI;

const connectToMongo = () => {
  mongoose.connect("mongodb+srv://muhammadhariskuk123:oVDIpopxOeAfuO0G@cluster0.auoni2m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

  const db = mongoose.connection;

  db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  db.once("open", () => {
    seeders();
    console.log("Connected to MongoDB");
  });
};

module.exports = connectToMongo;
