import express from "express"

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Satyam!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});