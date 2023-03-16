// basic express server

const http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const hpp = require("hpp");
const serverRoutes = require("./routes/v1/index");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "*",
    optionsSuccessStatus: 200,
  })
);

app.use(helmet());
app.use(hpp());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(serverRoutes);

app.use("*", (req, res, next) =>
  next(`Requested route does not exist on this server`)
);

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ message: err.message });
});

const server = http.createServer(app);

server.listen(4000, () => {
  console.log("Listening on port 4000");
});
