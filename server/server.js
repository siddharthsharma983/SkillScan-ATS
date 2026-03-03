const express = require("express");
const cors = require("cors");
const atsRoutes = require("./routes/atsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", atsRoutes);

app.listen(5000, () => {
  console.log("🚀 SkillScan ATS running on port 5000");
});
