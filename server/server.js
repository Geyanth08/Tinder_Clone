import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./tinderDB.js";
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

// App Config
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: __dirname + "/.env" });
const port = process.env.PORT || 8001;
const Mongodb_URL = process.env.MONGODB_URL;

// // Middlewares
app.use(express.json());
app.use(Cors());

// // DB Config
mongoose.connect(Mongodb_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// // API Endpoints
app.get("/", (req, res) =>
  res.status(200).send("HELLO WORLD! SERVER SETUP SUCCESSFUL")
);

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// // Listener
app.listen(port, () => console.log(`Listening on Localhost : ${port}`));
