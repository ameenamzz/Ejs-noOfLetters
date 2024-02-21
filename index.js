import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
var fullname = "";

function fullnameGenerator(req, res, next) {
  fullname = req.body["fName"] + req.body["lName"];
  next();
}

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(fullnameGenerator);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  console.log(fullname.length);
  res.render("index.ejs", { length: fullname.length });
  // res.send(`<h1>length of your name is ${fullname.length}</h1>`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
