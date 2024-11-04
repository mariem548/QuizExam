import { Form } from "react-bootstrap";
import QuizButton from "./quizButtons";
import { arrayOf, func,number,shape,string } from "prop-types";

export default function QuizCategory({
  categories,
  difficulties,
  handleStartQuiz,
}) {
  return (
    <Form>
      <div className="row">
        <div className="col-5">
          <Form.Select aria-label="categorySelect" id="categorySelect">
            <option> Select Category </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="col-5">
          <Form.Select aria-label="Default select example">
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
        >
          Create
        </QuizButton>
      </div>
    </Form>
  );
}
QuizCategory.propTypes = {
  categories: arrayOf( shape({
    id: number.isRequired,
    name:  string.isRequired,
  })).isRequired,
  difficulties:  arrayOf( shape({
    id:  string.isRequired,
    name:  string.isRequired,
  })).isRequired,
  handleStartQuiz:  func.isRequired,
};