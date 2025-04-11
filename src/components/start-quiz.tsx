import { Play } from "lucide-react";
interface StartQuizProps {
  onStart: () => void;
}
export default function startQuiz({ onStart }: StartQuizProps) {
  return (
    <div className="text-center p-8 m-auto h-1/2 min-w-4/5 font-semibold text-gray-800 bg-white rounded-lg shadow-lg mt-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to the the <br></br>CompTIA A+ Study Quiz!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Test your knowledge and prepare for the exam with our interactive quiz.
        <br></br>
        Answer questions, track your progress, and improve your skills.
        <br></br>
        There are 10 questions covering Core 1 and Core 2 topics.
      </p>
      <button
        onClick={onStart}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 inline-flex items-center"
      >
        <Play className="w-5 h-5 mr-2" />
        Start Quiz
      </button>
    </div>
  );
}
