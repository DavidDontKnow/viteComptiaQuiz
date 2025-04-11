import { Trophy } from "lucide-react";

interface QuizOverProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
}

export default function quizOver({
  onPlayAgain,
  score,
  totalQuestions,
}: QuizOverProps) {
  const percentage = (score / totalQuestions) * 100;
  return (
    <div className="p-8 text-center text-xl m-auto h-1/2 w-4/5 font-semibold text-gray-800 bg-white rounded-lg shadow-lg mt-4">
      <Trophy className="w-16 h-20 mx-auto mb-4 text-yellow-500" />
      <h1 className="text-2xl font-bold mb-4">Quiz Over!</h1>
      <p className="mb-4 font-thin">Thank you for playing!</p>
      <p className="mb-4">You got a {percentage}%!</p>
      <p className="mb-4 font-thin">
        Your score: {score}/{totalQuestions}
      </p>
      <button
        onClick={onPlayAgain}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
      >
        Play Again
      </button>
    </div>
  );
}
