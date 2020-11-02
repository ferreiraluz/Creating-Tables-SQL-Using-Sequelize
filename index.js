const express = require("express");
const app = express();

const router = require("./routes")

app.use(router);

const sequelize = require("./database/config/db");
const table = require("./database/table");
app.listen(8080);