const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const detailRoutes = require("./routes/detail");
const isAuth = require("./middleware/isAuth");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); 
  next();
});

app.use(bodyParser.json());

app.use("/auth", isAuth, authRoutes);
app.use("/detail", isAuth, detailRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
 return res.status(status).json({ message: message, data: data });
})

mongoose
  .connect(
    "mongodb+srv://Swaroopa:Welcome01@cluster0.jvyyp.mongodb.net/myFullstack?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(error => console.log(error));

