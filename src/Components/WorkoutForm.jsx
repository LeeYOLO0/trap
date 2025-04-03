import { useState, useEffect } from 'react'
import { useWorkoutStore } from '../Store/WorkoutStore'

export default function WorkoutForm({ editWorkout, setEditWorkout }) {
    const { addWorkout, editWorkout: updateWorkout } = useWorkoutStore()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
  
    useEffect(() => {
      if (editWorkout) {
        setTitle(editWorkout.title)
        setDescription(editWorkout.description)
      }
    }, [editWorkout])
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (editWorkout) {
        updateWorkout(editWorkout.id, title, description)
        setEditWorkout(null)
      } else {
        addWorkout(title, description)
      }
      setTitle('')
      setDescription('')
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название тренировки"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Описание тренировки"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">{editWorkout ? 'Сохранить' : 'Добавить'}</button>
      </form>
    )
}
  