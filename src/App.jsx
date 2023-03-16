import Card from './components/Card';
import GuessForm from './components/GuessForm';
import { useState } from 'react';

function App() {

  const question_array = [
    "What is a blueprint or template for creating objects that define the attributes and behavior of the objects called?",
    "What is an instance of a class that has its own state and behavior called?",
    "What is a mechanism that allows a new class to be based on an existing class and inherit its attributes and behavior called?",
    "What is the ability of objects to take on different forms or behaviors depending on the context in which they are used called?",
    "What is the practice of hiding the internal details of an object from the outside world, allowing only designated methods to access or modify the object's state called?",
    "What is the process of representing complex real-world concepts in a simplified and abstract way that can be easily modeled in software called?",
    "What is the set of attributes or properties that define the current condition of an object called?",
    "What are the actions or operations that an object can perform in response to a request or message from another object called?",
    "What is a class that cannot be instantiated and is intended to be subclassed called?",
    "What keyword is used to define class-level properties or methods that can be accessed without instantiating an object?"
  ]

  const answer_array = [
      "Class",
      "Object",
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Abstraction",
      "State",
      "Behavior",
      "Abstract Class",
      "Static",
  ]

  const [guessForm, setGuessForm] = useState({guess: ""})
  const [alert, setAlert] = useState("")

  const handleChange = (e) => {
    const newGuessForm = {};
    const newValue = e.target.value
    const key = e.target.name
    newGuessForm[key] = newValue
    setGuessForm({...guessForm, ...newGuessForm})
  }

  const onSubmit = () => {
    alert(answer_array[index] == guessForm.guess ? 'Correct' : 'Wrong');
  }


  const [num_cards, addCard] = useState(question_array.length)
  const [question, setQuestion] = useState(question_array[0]);
  const [answer, setAnswer] = useState(answer_array[0]);
  const [index, setIndex] = useState(0)

  const changeCard = () => {
    setIndex(Math.floor(Math.random() * num_cards));
    setQuestion(question_array[index]);
    setAnswer(answer_array[index]);
  }

  const nextCard = () => {
    setIndex(index + 1 < question_array.length ? index + 1 : 0)
    setQuestion(question_array[index]);
    setAnswer(answer_array[index]);
  }

  const prevCard = () => {
    setIndex(index - 1 >= 0 ? index - 1 : question_array.length - 1)
    setQuestion(question_array[index]);
    setAnswer(answer_array[index]);
  }

  return (
    <div className='App'>

      <h1>QuizDeck: Object-Oriented Programming</h1>
      <h2>Sharpen your OOP knowledge with this QuizDeck!</h2>
      <h4>Number of Cards: {num_cards}</h4>

      <Card question={question} answer={answer} />

      <GuessForm guessForm={guessForm} handleChange={handleChange} onSubmit={onSubmit}/>

      <div className='Buttons'>
        <button onClick={nextCard}>Next</button>
        <button onClick={prevCard}>Back</button>
        <button onClick={changeCard}>Random</button>
      </div>

    </div>
  )
}

export default App
