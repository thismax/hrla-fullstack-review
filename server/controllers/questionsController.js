const db = require('../database');

module.exports = {
  fetchQuestions: (req, res) => {
    db.Question.findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  createQuestion: (req, res) => {
    db.Question.create({
      frame: req.body.frame,
      answer1: req.body.answer1,
      answer2: req.body.answer2,
      answer3: req.body.answer3,
      correct: req.body.correct,
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },
};
