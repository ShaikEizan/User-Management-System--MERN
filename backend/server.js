const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

const userRoute = require("./routes/userRoute");

app.use(express.json());

mongoose.connect(process.env.URI)
.then(() => {
    console.log("connected successfully");
app.listen(process.env.PORT || 8080 , (err) => {
   if(err) console.log(err);
   console.log("Running successfully at ",process.env.PORT);
});

})
.catch((error) => {
    console.log("Failed to connect" ,error);
});

app.use(userRoute);
