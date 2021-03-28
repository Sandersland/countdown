const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.status(200).render("index.html");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
