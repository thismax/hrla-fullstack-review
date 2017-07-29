import React from 'react';
import PropTypes from 'prop-types';

const Score = props => (
  <div className="score">
    <div>Your score:</div>
    <div>{props.score}/{props.totalQuestions}</div>
  </div>
);

Score.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default Score;
