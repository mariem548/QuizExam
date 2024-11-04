import { useNavigate } from "react-router-dom";
import { QuizContext } from "../hook/useQuizContext";
import { useContext } from "react";
import QuizButton from "./quizButtons";
import QuizScore from "./quizScore";

export default function QuizResults() {
  const { questions, score, selectedAnswers } = useContext(QuizContext);
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="text-center">RESULTS</h1>
      {questions.map((question, index) => (
        <div key={index} className="mb-3">
          <h2>{question.question}</h2>
          {[...question.incorrect_answers, question.correct_answer].map(
            (answer) => {
              const isCorrect = answer === question.correct_answer;
              const isSelected = selectedAnswers[index] === answer;
              return (
                <button
                  type="button"
                  key={answer}
                  className={`btn ${
                    isCorrect ? "btn-success" : isSelected ? "btn-danger" : ""
                  }`}
                >
                  {answer}
                </button>
              );
            }
          )}
        </div>
      ))}
      <QuizScore score={score} totalQuestions={questions.length}/>
      <QuizButton
        className="d-grid gap-2"
        variant="btn btn-secondary mt-4"
        id="resultBtn"
        onClick={() => navigate("/")}
      >
        Create a new Quiz
      </QuizButton>
    </div>
  );
}
