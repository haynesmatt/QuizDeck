import './App.css'
import Card from './components/Card';
import { useState } from 'react';

function App() {

  return (
    <div>
      <h1>QuizDeck: Object-Oriented Programming</h1>
      <h2>Sharpen your OOP knowledge... Ace that next SWE Internship Interview!</h2>
      <h2>Number of Cards: 10</h2>
      <Card />
    </div>
  )
}

export default App
