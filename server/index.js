require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const uploadRoutes = require("./routes/upload");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.use(cors());

app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

//routes
app.use("/uploads", express.static("uploads"));

app.use("/api/resumes", uploadRoutes);

mongoose.connect(process.env.DB_CONNECTION_URL_LOCAL_CRM, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
