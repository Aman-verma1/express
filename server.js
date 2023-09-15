const express = require("express");
const db = require("./db/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./routes/Router");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()), app.use("/", route);

app.listen("8000", () => console.log("running on port 8000"));
