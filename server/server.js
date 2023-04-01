const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require("./routes/routes");
const path = require("path");

const API_PORT = 3000;
const app = express();
app.use(cors());

// only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/")));

// append /api for our http requests
app.use("/api", routes);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
