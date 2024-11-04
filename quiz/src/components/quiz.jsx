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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
        console.log("categoriesData", categoriesData);
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
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    navigate("/results");
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">Quiz Maker</h1>
      <QuizCategory
        categories={categories}
        difficulties={difficulties}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
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
