require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port=process.env.PORT
const mongo=process.env.MONGO_URL

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());
mongoose
    .connect(mongo, { family: 4 })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });

app.listen(port,()=>{
  console.log(`Listening at port ${port}`)
})