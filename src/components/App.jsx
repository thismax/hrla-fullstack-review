import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/styles.scss';
import AddQuestion from './AddQuestion';
import QuestionsList from './QuestionsList';
import Score from './Score';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allQuestions: [],
      score: 0,
    };
    this.getAllQuestions = this.getAllQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
  }

  componentDidMount() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    axios.get('/api/questions/fetch')
      .then(({ data }) => {
        this.setState({ allQuestions: data });
      })
      .catch(err => console.log(err));
  }

  addQuestion(question) {
    this.state.allQuestions.push(question);
    this.setState({ allQuestions: this.state.allQuestions });
  }

  incrementScore() {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    return (
      <div className="main">
        <div className="title">MOVIE WIZ QUIZ</div>
        <AddQuestion
          addQuestion={this.addQuestion}
        />
        <QuestionsList
          questions={this.state.allQuestions}
          incrementScore={this.incrementScore}
        />
        <Score
          score={this.state.score}
          totalQuestions={this.state.allQuestions.length}
        />
      </div>
    );
  }
}

export default App;
