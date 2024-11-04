import { getColor } from "../utils/utils";
import { number } from "prop-types";

export default function QuizScore({ score, totalQuestions }) {
  return (
    <div>
      <h2
        style={{
          color: "black",
          backgroundColor: getColor(score),
          textAlign: "center",
        }}
      >
        You Scored {score} out of {totalQuestions}
      </h2>
    </div>
  );
}

QuizScore.propTypes = {
  score: number.isRequired,
  totalQuestions: number.isRequired,
};
