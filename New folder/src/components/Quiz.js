import React from 'react';

const questions = [
  {
    question: "What is the capital of the U.S.?",
    options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
    answer: "Washington D.C."
  },
  {
    question: "Which is a prime number?",
    options: ["4", "6", "7", "8"],
    answer: "7"
  }
];

function Quiz() {
  return (
    <div>
      {questions.map((q, i) => (
        <div key={i}>
          <h3>{q.question}</h3>
          <ul>
            {q.options.map((opt, j) => (
              <li key={j}>{opt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Quiz;