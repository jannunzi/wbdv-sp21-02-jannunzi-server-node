const questionsService = require("../services/questions/questions-service")

module.exports = (app) => {

    // /api/questions
    const findAllQuestions = (req, res) => {
        // const questions = questionsService.findAllQuestions();
        questionsService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    // /api/quizzes/:qzid/questions
    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params.qzid;
        // const questions = questionsService
        //     .findQuestionsForQuiz(qzid)
        const questions = questionsService
            .findQuestionsForQuiz(qzid)
            .then((questions) => {
                res.send(questions)
            })
    }

    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.get("/api/questions", findAllQuestions);

}
