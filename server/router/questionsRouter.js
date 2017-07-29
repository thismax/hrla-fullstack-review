const router = require('express').Router();
const controller = require('../controllers/questionsController');

router.get('/fetch', controller.fetchQuestions);

router.post('/create', controller.createQuestion);

module.exports = router;
