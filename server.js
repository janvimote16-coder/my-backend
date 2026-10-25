
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.get("/api/students", (req, res) => {
  res.json([
    { id: 1, name: "Janvi", course: "BSc IT" },
    { id: 2, name: "Student ABC", course: "BSc IT" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
