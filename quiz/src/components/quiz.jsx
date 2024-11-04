import { useNavigate } from "react-router-dom";
import QuizCategory from "./quizCategory";
import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../hook/useQuizContext";
import { fetchCategories, fetchQuestions } from "../api/api";
import QuizQuestions from "./quizQuestions";
import { difficulties } from "../utils/utils";

export default function Quiz() {
  const navigate = useNavigate();
  const {
    questions,
    setQuestions,
    setScore,
    selectedAnswers,
    setSelectedAnswers,
  } = useContext(QuizContext);

  const [categories, setCategories] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  const handleStartQuiz = async () => {
    try {
      const questions = await fetchQuestions();
      setQuestions(questions);
      setShowQuiz(true);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleSubmit = () => {
    const calculatedScore = questions.reduce(
      (score, { correct_answer }, index) => 
        score + (selectedAnswers[index] === correct_answer ? 1 : 0),
      0
    );
    
    setScore(calculatedScore);
    navigate("/results");
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">Quiz Maker</h1>
      <QuizCategory
        categories={categories}
        difficulties={difficulties}
        handleStartQuiz={handleStartQuiz}
      />{" "}
      {showQuiz && (
        <QuizQuestions
          questions={questions}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
