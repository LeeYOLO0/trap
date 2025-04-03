import { create } from 'zustand'

export const useWorkoutStore = create((set) => ({
  workouts: [],
  addWorkout: (title, description) =>
    set((state) => ({
      workouts: [
        ...state.workouts,
        {
          id: Date.now(),
          title,
          description,
        },
      ],
    })),
  editWorkout: (id, title, description) =>
    set((state) => ({
      workouts: state.workouts.map((workout) =>
        workout.id === id ? { ...workout, title, description } : workout
      ),
    })),
  deleteWorkout: (id) =>
    set((state) => ({
      workouts: state.workouts.filter((workout) => workout.id !== id),
    })),
}))
