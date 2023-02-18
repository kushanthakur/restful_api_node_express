import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes.js";

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serving static files
app.use(express.static("public"));

routes(app);
app.get("/", (req, res) =>
  res.send(`Node and Express server is running on ${PORT}`)
);

app.listen(PORT, () =>
  console.log(
    `Express server listening to port ${PORT}: http://localhost${PORT}`
  )
);
