import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Question from "./Component/Question";
import Score from "./Component/Score";
import qbank from "./Component/QuestionBank";
function App() {

const [state, setState] = useState({
  questionBank: qbank,
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  quizend: false,
})

const handleOptionChange = (e) => {
  setState((prev) => ({...prev, selectedOption: e.target.value}));
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  checkAnswer();
  handleNextQuestion();
}

const checkAnswer = () => {
  const { questionBank, currentQuestion, selectedOption, score } = state;
    if(selectedOption === questionBank[currentQuestion].answer){
      setState((prev) => ({...prev, score: prev.score + 1}));
    }
}

const handleNextQuestion = () => {
  const {questionBank, currentQuestion} = state;
  if(currentQuestion + 1 < questionBank.length){
    setState((prev) => ({
      ...prev, 
      currentQuestion: prev.currentQuestion + 1,
      selectedOption: "",
    }));
  }
  else{
    setState((prev) => ({...prev, quizend: true}));
  }
}

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h1 className="app-title">Quiz App</h1>
      {!state.quizend ?(
      <Question 
        question = {state.questionBank[state.currentQuestion]}
        selectedOption = {state.selectedOption}
        onOptionChange = {handleOptionChange}
        onSubmit = {handleFormSubmit}
        />
      ) : (
      <Score score={state.score} onNextQuestion={handleNextQuestion}/>
)}
    </div>
  );
}

export default App;
