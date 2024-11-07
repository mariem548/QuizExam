import { Form } from "react-bootstrap";
import QuizButton from "./quizButtons";
import { arrayOf, func, number, shape, string,bool } from "prop-types";

export default function QuizCategory({
  categories,
  difficulties,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  handleStartQuiz,
  isDisabled,
  isLoading,
}) {
  return (
    <Form>
      <div className="row">
        <div className="col-5">
          <Form.Select
            aria-label="categorySelect"
            id="categorySelect"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option> Select Category </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="col-5">
          <Form.Select
            aria-label="difficultySelect"
            id="difficultySelect"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option>Select Difficulty</option>
            {difficulties.map((level) => (
              <option key={level.id} value={level.id}>
                {level.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <QuizButton
          className="col-2"
          id="createBtn"
          variant="primary"
          onClick={handleStartQuiz}
          disabled={isDisabled}
        >
          {isLoading ? "Loading..." : "Create"}{" "}
        </QuizButton>
      </div>
    </Form>
  );
}
QuizCategory.propTypes = {
  categories: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
  difficulties: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
  selectedCategory: string.isRequired,
  setSelectedCategory: func.isRequired,
  selectedDifficulty: string.isRequired,
  setSelectedDifficulty: func.isRequired,
  handleStartQuiz: func.isRequired,
  isDisabled: bool,
  isLoading: bool.isRequired,
};
