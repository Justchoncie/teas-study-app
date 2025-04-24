import React, { useState } from 'react';

const topics = [
  {
    title: "The Skeletal System",
    parts: "Skull, spine, ribs, limbs",
    function: "Supports movement and protects organs",
    quiz: {
      question: "What does the skeletal system do?",
      options: ["Breaks down food", "Protects organs and helps movement", "Fights infection", "Sends signals to muscles"],
      answer: 1
    }
  },
  {
    title: "The Respiratory System",
    parts: "Nose, trachea, lungs, alveoli",
    function: "Exchanges oxygen and carbon dioxide",
    quiz: {
      question: "What gas do we breathe out?",
      options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
      answer: 1
    }
  }
];

function TEASStudyApp() {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(Array(topics.length).fill(false));

  const handleOptionClick = (index) => {
    const isCorrect = index === topics[current].quiz.answer;
    setShowAnswer(isCorrect);
    if (isCorrect && !completed[current]) {
      setScore(score + 1);
      const updated = [...completed];
      updated[current] = true;
      setCompleted(updated);
    }
  };

  const progressPercent = (completed.filter(Boolean).length / topics.length) * 100;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>TEAS Science Study App 🌟</h1>
      <p>Score: {score}/{topics.length} | Progress: {progressPercent.toFixed(0)}%</p>

      <h2>{topics[current].title}</h2>
      <p><strong>Parts:</strong> {topics[current].parts}</p>
      <p><strong>Function:</strong> {topics[current].function}</p>

      <h3>Quiz: {topics[current].quiz.question}</h3>
      {topics[current].quiz.options.map((opt, idx) => (
        <button key={idx} style={{ display: 'block', margin: '10px 0' }} onClick={() => handleOptionClick(idx)}>
          {opt}
        </button>
      ))}

      {showAnswer !== null && (
        <p style={{ color: showAnswer ? 'green' : 'red' }}>
          {showAnswer ? 'Correct! 🎉' : 'Try again!'}
        </p>
      )}

      <button onClick={() => {
        setCurrent((prev) => (prev + 1) % topics.length);
        setShowAnswer(null);
      }}>Next Topic ➡️</button>
    </div>
  );
}

export default TEASStudyApp;