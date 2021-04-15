const usersModel = require("../models/users/users-model")

const findUserByUsername = (username) => {
    // return usersModel.find({username: username})
    return usersModel.find({username})
}

const findUserByCredentials = (credetials) => {
    return usersModel.findOne({
        username: credetials.username,
        password: credetials.password
    })
    // return usersModel.find({username})
}

const createUser = (user) => {
    return usersModel.create(user)
}

module.exports = {
    findUserByUsername,
    findUserByCredentials,
    createUser
}