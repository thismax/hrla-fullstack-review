import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class AddQuestion extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: '',
      answer1: '',
      answer2: '',
      answer3: '',
      correct: '1',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
  }

  handleOnChange(e, type) {
    this.setState({ [type]: e.target.value });
  }

  createQuestion() {
    const newQuestion = {
      frame: this.state.imageUrl,
      answer1: this.state.answer1,
      answer2: this.state.answer2,
      answer3: this.state.answer3,
      correct: Number(this.state.correct),
    };
    axios.post('/api/questions/create', newQuestion)
      .then(({ data }) => {
        this.props.addQuestion(data);
      })
      .catch(err => console.log('this is the error', err));
    this.setState({
      imageUrl: '',
      answer1: '',
      answer2: '',
      answer3: '',
    });
  }

  render() {
    return (
      <div className="addQuestion">
        <div className="createText">create a new question</div>
        <input
          className="imageInput"
          value={this.state.imageUrl}
          type="text"
          placeholder="image url for a movie frame"
          onChange={e => this.handleOnChange(e, 'imageUrl')}
        />
        <input
          className="answerInput"
          value={this.state.answer1}
          type="text"
          placeholder="answer 1"
          onChange={e => this.handleOnChange(e, 'answer1')}
        />
        <input
          className="answerInput"
          value={this.state.answer2}
          type="text"
          placeholder="answer 2"
          onChange={e => this.handleOnChange(e, 'answer2')}
        />
        <input
          className="answerInput"
          value={this.state.answer3}
          type="text"
          placeholder="answer 3"
          onChange={e => this.handleOnChange(e, 'answer3')}
        />
        <select
          className="selectCorrect"
          onChange={e => this.handleOnChange(e, 'correct')}
        >
          <option value="1">correct answer 1</option>
          <option value="2">correct answer 2</option>
          <option value="3">correct answer 3</option>
        </select>
        <button
          className="createButton"
          onClick={this.createQuestion}
        >Create</button>
      </div>
    );
  }
}

AddQuestion.propTypes = {
  addQuestion: PropTypes.func.isRequired,
};

export default AddQuestion;
