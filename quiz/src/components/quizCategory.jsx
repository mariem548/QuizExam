import { Form } from "react-bootstrap";

export default function QuizCategory() {
  return (
    <Form>
      <div className="row">
        <div className="col-5">
          <Form.Select aria-label="categorySelect"  id="categorySelect">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="col-5">
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
    </Form>
  );
}
