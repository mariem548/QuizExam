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
  const [timeClick, setTimeClick] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [isDisabled, setIsDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    // Le bouton est activé uniquement lorsque les deux sélections sont faites
    setIsDisabled((!selectedCategory && !selectedDifficulty) || isLoading);
  }, [selectedCategory, selectedDifficulty, isLoading]);



  const handleStartQuiz = async () => {
    if (timeClick || isLoading) return;
    setTimeClick(true);
    setIsLoading(true);
      try {
      
      const questions = await fetchQuestions(
        selectedCategory,
        selectedDifficulty
      );
      setQuestions(questions);
      setShowQuiz(true);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => setTimeClick(false), 2000); 
    }
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
  
    questions.forEach((question, index) => {
      calculatedScore += selectedAnswers[index] === question.correct_answer ? 1 : 0;
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
        handleStartQuiz={handleStartQuiz}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        isDisabled={isDisabled}
        isLoading={isLoading}
      />
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
