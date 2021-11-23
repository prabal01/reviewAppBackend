const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();
//Routes
const userRouter = require("./Routes/userRoutes");
const utilityRouter = require("./Routes/utitlityRoutes");
const profileRoutes = require("./Routes/profileRoutes");
const reviewRoutes = require("./Routes/reviewRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use("/api", userRouter);
app.use("/api", utilityRouter);
app.use("/api", profileRoutes);
app.use("/api", reviewRoutes);
app.listen(process.env.PORT, () => {
  console.log("server is running at:", `http://localhost:${process.env.PORT}`);
});
