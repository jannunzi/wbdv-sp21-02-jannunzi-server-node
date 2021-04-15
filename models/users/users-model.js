const mongoose = require("mongoose")
const usersSchema = require("./users-schema")
const usersModel = mongoose.model("UserModel", usersSchema)
module.exports = usersModel