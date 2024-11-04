import { randomAnswer } from "../utils/utils";
import QuizButton from "./button";

export default function QuizQuestions({
  questions,
  selectedAnswers,
  setSelectedAnswers,
  handleSubmit,
}) {
  const handleAnswerClick = (questionIndex, answer) => {
    const updateSelectedAnswers = [...selectedAnswers];
    updateSelectedAnswers[questionIndex] = answer;
    setSelectedAnswers(updateSelectedAnswers);
  };
  const renderAnswers = (question, questionIndex) => {
    
    return randomAnswer([
      ...question.incorrect_answers,
      question.correct_answer,
    ]).map((answer) => (
      <button
        type="button"
        key={answer}
        className={`btn ${
          selectedAnswers[questionIndex] === answer
            ? "btn-success active"
            : "btn btn-outline-success"
        }`}
        onClick={() => handleAnswerClick(questionIndex, answer)}
      >
        {answer}
      </button>
    ));
  };

  const renderQuestion = (question, index) => (
    <div key={index}>
      <h2>{question.question}</h2>
      {renderAnswers(question, index)}
    </div>
  );
  return (
    <div className="mt-5">
      {questions.map(renderQuestion)}
      <QuizButton
        className="d-grid gap-2"
        variant="btn btn-secondary mt-4"
        id="questBtn"
        onClick={handleSubmit}
      >
        Submit Quiz
      </QuizButton>
    </div>
  );
}
