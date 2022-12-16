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
app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: false,
    methods: "GET",
    allowedHeaders: [
      "Content-Type",
      "X-Requested-With",
      "Access-Control-Allow-Origin",
    ],
  })
);

// app.use("/api", apiRouter);
app.use("/api/ship", shipRoutes);

app.listen(process.env.PORT || "3001", () => {
  console.log(`Backend is running ${process.env.PORT || "3001"}`);
});
