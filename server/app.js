import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, express");
});

app.listen(4000, () => {
  console.log("Server is running on 4000 port");
});