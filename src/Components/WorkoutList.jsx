import { useWorkoutStore } from '../Store/WorkoutStore'

export default function WorkoutList({ setEditWorkout }) {
  const { workouts, deleteWorkout } = useWorkoutStore()

  return (
    <div>
      {workouts.length === 0 && <p>Нет добавленных членов</p>}
      {workouts.map((workout) => (
        <div key={workout.id} className="workout-card">
          <h3>{workout.title}</h3>
          <p>{workout.description}</p>
          <button onClick={() => setEditWorkout(workout)}>Редактировать</button>
          <button onClick={() => deleteWorkout(workout.id)}>Удалить</button>
        </div>
      ))}
    </div>
  )
}