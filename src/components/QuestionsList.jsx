import React from 'react';
import PropTypes from 'prop-types';
import QuestionEntry from './QuestionEntry';

const QuestionsList = props => (
  <div className="questionList">
    {props.questions.map(question => (
      <QuestionEntry
        key={question.id}
        question={question}
        incrementScore={props.incrementScore}
      />
    ))}
  </div>
);

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  incrementScore: PropTypes.func.isRequired,
};

export default QuestionsList;
