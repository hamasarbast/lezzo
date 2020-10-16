const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const xwardngaRoute = require("./routes/xwardnga");
const marketRoute = require("./routes/market");
const imageRoute = require("./routes/imageUpload");
const dashkanRoute = require("./routes/dashkan");
const cors = require('cors');

// رەپتی داتابایس
mongoose.connect(
  "mongodb+srv://Muhammed:hama121212@lezoo-cluster.oyy4u.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.on("error", (err) => {
  console.log("conect nabwa");
});
mongoose.connection.on("connected", (connected) => {
  console.log("database conect bu ba sarkawtue");
});


// midllewares

app.use('/uploads' , express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// handling routes
app.use(cors());
app.use("/xwardnga", xwardngaRoute);
app.use('/market' , marketRoute);
app.use('/image' , imageRoute);
app.use("/dashkan" , dashkanRoute);


app.use((req, res, next) => {
  res.status(404).json({
    error: "bad request",
  });
});


module.exports = app;
