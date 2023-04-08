const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

//rest object
const app = express();

//dotenv
dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

//listen server
app.listen(PORT, () => {
    console.log(
      `Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`
    );
});