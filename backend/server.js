const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/classes", require("./src/routes/lectureRoutes"));
app.use("/api/questions", require("./src/routes/questionRoutes"));

// Root route
app.get("/", (req, res) => {
  res.json({ message: "VidyaVichara API is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
