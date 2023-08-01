import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 50 && percentage < 100) emoji = "🎉";
  if (percentage >= 80 && percentage < 80) emoji = "🐱";
  if (percentage >= 0 && percentage < 50) emoji = "🤔 ";
  if (percentage === 0) emoji = "🙈";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints}
        </strong>{" "}
        ({Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(Highscore: {highscore} points)</p>
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart a Quizz
        </button>
      </div>
    </>
  );
}
