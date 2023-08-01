import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const timerId = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(timerId);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
