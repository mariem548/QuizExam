import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./components/quiz";
import QuizResults from "./components/quizResults";
import QuizProvider from "./hook/useQuizContext";

function App() {
  return (
    <QuizProvider>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/results" element={<QuizResults />} />
      </Routes>
    </QuizProvider>
  );
}

export default App;
