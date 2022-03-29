const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./accounts.model");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/account", { useNewUrlParser: true });

// let db = mongoose.Connection;

// db.on("error", console.error.bind(console, "Mongo connection error"));
// let accountsDB = db.collection("accounts");
const account = require("./accounts.route");
app.use("/account", account);

app.listen(3000, () => {
  console.log("server is running on 3000");
//   console.log(
//     accountsDB != null
//       ? accountsDB.name + " database found"
//       : accountsDB.name + " database not found"
//   );
});
