
const dbConfig = require("../config/db.config.js.js.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./model.js")(mongoose);

module.exports = db;