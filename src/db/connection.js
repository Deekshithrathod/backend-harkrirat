const mongoose = require("mongoose");

const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/harkiratDB";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(mongoURI, options)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = mongoose;
