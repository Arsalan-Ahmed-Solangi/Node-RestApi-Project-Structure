//******ImportingPackages********//
import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import { configDotenv } from "dotenv";
import bodyParser from "body-parser";

//***App****//
const app = express();

//****EnvConfig******//
configDotenv();

//*****EnablesCors********//
app.use(cors());

//***HttpRequestLogger****//
app.use(morgan("dev"));

//***ParseJSON****//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//*****TestRoute*******//
app.get("/", (req, res) => {
  return res.send("Hello App!");
});

//*****Listening*******//
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(colors.green(`Listening on port ${port}`));
});
