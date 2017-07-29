const router = require('express').Router();

const questionsRouter = require('./questionsRouter');

router.use('/questions', questionsRouter);

module.exports = router;
