require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const shipRoutes = require("./routes/ship-routes");
// const apiRouter = require("./routes");

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: false,
    methods: "GET",
    allowedHeaders: ["Content-Type", "X-Requested-With"],
  })
);

// app.use("/api", apiRouter);
app.use("/api/get/ship", shipRoutes);

app.listen(process.env.PORT || "3001", () => {
  console.log(`Backend is running ${process.env.PORT || "3001"}`);
});
