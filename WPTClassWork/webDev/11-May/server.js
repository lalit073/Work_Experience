import express, { response } from "express";

import fileUpload from "express-fileupload";
let app = express();
let port = 3000;

app.use(fileUpload());
app.use(express.static("index.html"));
app.get("/", (request, response) => {
  return response.send("hi.......");
});

app.get("/howudoin", (req, res) => {
  return res.send("Hey Good Lookinnnn......What u gonna lookinn");
});
app.get("/Frinds", (req, res) => {
  return res.send();
});
app.post("/upload", (req, res) => {
  const { image } = req.files
  if(!image) return res.sendStatus(400)
  image
});
app.listen(port, () => {
  console.log("App is listening on port 3000");
});
