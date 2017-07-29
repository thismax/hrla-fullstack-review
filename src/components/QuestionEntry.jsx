import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuestionEntry extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false,
      answer1: '',
      answer2: '',
      answer3: '',
    };
  }

  handleClick(number, answer) {
    this.setState({ disabled: true });
    if (number === this.props.question.correct) {
      this.props.incrementScore();
      this.setState({ [answer]: 'right' });
    } else {
      this.setState({ [answer]: 'wrong' });
    }
  }

  render() {
    return (
      <div className="questionEntry">
        <img className="filmFrame" src={this.props.question.frame} alt="Movie frame not found" />
        <button
          className={`answerButton ${this.state.answer1}`}
          disabled={this.state.disabled}
          onClick={() => this.handleClick(1, 'answer1')}
        >{this.props.question.answer1}</button>
        <button
          className={`answerButton ${this.state.answer2}`}
          disabled={this.state.disabled}
          onClick={() => this.handleClick(2, 'answer2')}
        >{this.props.question.answer2}</button>
        <button
          className={`answerButton ${this.state.answer3}`}
          disabled={this.state.disabled}
          onClick={() => this.handleClick(3, 'answer3')}
        >{this.props.question.answer3}</button>
      </div>
    );
  }
}

QuestionEntry.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    frame: PropTypes.string,
    answer1: PropTypes.string,
    answer2: PropTypes.string,
    answer3: PropTypes.string,
    correct: PropTypes.number,
  }).isRequired,
  incrementScore: PropTypes.func.isRequired,
};

export default QuestionEntry;
