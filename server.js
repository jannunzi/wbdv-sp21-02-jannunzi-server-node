// TODO: visit https://expressjs.com/
const express = require('express')
const app = express()

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const demos = require('./controllers/demos-controller')
demos(app)

// const quizzesController = require('./controllers/quizzes-controller')
// quizzesController(app)

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)

app.listen(4000)