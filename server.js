require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

const shipRoutes = require("./routes/ship-routes");
// const apiRouter = require("./routes");

const app = express();

app.disable("etag");
app.use(logger("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

// app.use("/api", apiRouter);
app.use("/api/ship", shipRoutes);

app.listen(process.env.PORT || "3001", () => {
  console.log(`Backend is running ${process.env.PORT || "3001"}`);
});
