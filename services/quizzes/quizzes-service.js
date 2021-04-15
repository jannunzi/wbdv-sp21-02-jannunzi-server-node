const quizzes = require('./quizzes.json')

const quizzesModel = require("../../models/quizzes/quizzes-model")

// TODO: Node.js Assignment this week
const findAllQuizzes = () => {
    return quizzesModel.find()
    // return quizzes
}
const findQuizById = (quizId) => {
    return quizzesModel
        .findById(quizId)
        .populate("quizzes")
        .exec()
    // return quizzesModel.find({_id: quizId})
    // return quizzes.find((quiz) => {
    //     return quiz._id === quizId
    // })
}

// console.log(findAllQuizzes())
// console.log(findQuizById('123'))

// TODO: MongoDB Assignment next week
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findQuizById, findAllQuizzes,
    updateQuiz, deleteQuiz
}