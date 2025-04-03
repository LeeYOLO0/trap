import { useState } from 'react'
import WorkoutForm from './Components/WorkoutForm'
import WorkoutList from './Components/WorkoutList'
import './App.css'

function App() {
  const [editWorkout, setEditWorkout] = useState(null)

  return (
    <div className="container">
      <h1>Тренировка</h1>
      <WorkoutForm editWorkout={editWorkout} setEditWorkout={setEditWorkout} />
      <WorkoutList setEditWorkout={setEditWorkout} />
    </div>
  )
}

export default App
