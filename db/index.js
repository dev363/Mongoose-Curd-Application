const mongoose = require("mongoose");

module.exports = (MONGO_USER, MONGO_PASSWORD, MONGO_DB) => {

  let mongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.w4iyq.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;

  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB database");
  });
  
  return db;

};
