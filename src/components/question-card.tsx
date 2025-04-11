import { Question } from "../types/quiz";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  totalQuestions: number;
  currentQuestion: number;
}

export default function questionCard({
  question,
  onAnswer,
  selectedAnswer,
  totalQuestions,
  currentQuestion,
}: QuestionCardProps) {
  const getButtonClass = (key: string) => {
    if (selectedAnswer === null) return "hover:bg-gray-200";
    if (selectedAnswer && key === question.answer)
      return "bg-green-500 text-white border-green-700";
    if (selectedAnswer === key) return "bg-red-200 border-red-700";
    return "bg-white-300 border-gray-300";
  };
  return (
    <div className="flex flex-col items-center h-1/2 p-4 w-3/4 mx-auto rounded-lg shadow-lg mt-4 bg-white">
      <h3 className="text-lg font-thin text-gray-950 mb-1.5">
        Question {currentQuestion + 1} of {totalQuestions}
      </h3>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {question.question}
      </h2>
      <div className="space-y-3 w-full">
        {Object.keys(question.choices).map((key) => (
          <button
            key={key}
            datatype={key}
            onClick={() => selectedAnswer === null && onAnswer(key)}
            className={`w-full bg-white-300 text-gray-800 font-semibold py-2 px-2 rounded border-2 ${getButtonClass(
              key
            )}`}
          >
            {question.choices[key as keyof typeof question.choices]}
          </button>
        ))}
      </div>
    </div>
  );
}
