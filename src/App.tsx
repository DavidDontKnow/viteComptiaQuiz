import StartQuiz from "./components/start-quiz";
import QuestionCard from "./components/question-card";
import QuizOver from "./components/quiz-over";
import { useState } from "react";
import { GameState } from "./types/quiz";
import { QUESTIONS } from "./data/questions";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const handleStart = () => {
    QUESTIONS.sort(() => Math.random() - 0.5);
    QUESTIONS.splice(10);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setGameState("playing");
  };
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const handleAnswer = (answer: string): void => {
    setSelectedAnswer(answer);
    const isCorrect = answer === QUESTIONS[currentQuestion].answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setGameState("end");
        setSelectedAnswer(null);
      }
    }, 1000);
  };
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  return (
    <div className="App bg-gray-600 min-h-screen flex flex-col items-center justify-center m-auto">
      {gameState === "start" && <StartQuiz onStart={handleStart} />}
      {gameState === "playing" && (
        <div className="p-8">
          <QuestionCard
            question={QUESTIONS[currentQuestion]}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            totalQuestions={QUESTIONS.length}
            currentQuestion={currentQuestion}
          />
          <p className="text-center font-thin mt-4 text-white">
            Score: {score} / {QUESTIONS.length}
          </p>
        </div>
      )}
      {gameState === "end" && (
        <QuizOver
          onPlayAgain={handleStart}
          score={score}
          totalQuestions={QUESTIONS.length}
        />
      )}
    </div>
  );
}

export default App;
