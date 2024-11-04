import { createContext, useState } from "react";
import { node } from "prop-types";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        answers,
        setAnswers,
        score,
        setScore,
        selectedAnswers,
        setSelectedAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
QuizProvider.propTypes = {
  children: node.isRequired,
};
export default QuizProvider;
