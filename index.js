const express = require("express");
require("dotenv").config();
const authRouter = require("./routers/auth");
const database = require("./database/index");

const app = express();
database();
app.use(express.json()); //Middleware to attatch payload body to req
app.use("/", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server run at Port ${process.env.PORT}`);
});
