module.exports = (app) => {
    const quizzesService = require('../services/quizzes-service')

    const findAllQuizzes = (req, res) => {
        const quizzes = quizzesService.findAllQuizzes()
        res.send(quizzes)
    }
    const findQuizById = (req, res) => {
        const qid = req.params['quizId']
        const quiz = quizzesService.findQuizById(qid)
        res.send(quiz)
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}