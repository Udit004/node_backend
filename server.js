import express from "express";

const app = express();

// ✅ CORRECT way
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Udit!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
