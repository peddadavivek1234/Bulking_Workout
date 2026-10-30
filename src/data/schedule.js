export const weeklySchedule = [
  {
    id: 1,
    day: 'MONDAY',
    focus: 'Chest & Triceps',
    type: 'Strength Training',
    exercises: [
      { name: 'Barbell Bench Press', sets: '4 Sets', reps: '10 Reps' },
      { name: 'Incline Dumbbell Press', sets: '3 Sets', reps: '12 Reps' },
      { name: 'Cable Chest Fly', sets: '3 Sets', reps: '12 Reps' },
      { name: 'Tricep Pushdown', sets: '3 Sets', reps: '12 Reps' }
    ],
    duration: '60 Min',
    status: 'Workout'
  },
  {
    id: 2,
    day: 'TUESDAY',
    focus: 'Back & Biceps',
    type: 'Strength Training',
    exercises: [
      { name: 'Lat Pulldown', sets: '4 Sets', reps: '10 Reps' },
      { name: 'Barbell Row', sets: '3 Sets', reps: '10 Reps' },
      { name: 'Seated Cable Row', sets: '3 Sets', reps: '12 Reps' },
      { name: 'Dumbbell Curl', sets: '3 Sets', reps: '12 Reps' }
    ],
    duration: '60 Min',
    status: 'Workout'
  },
  {
    id: 3,
    day: 'WEDNESDAY',
    focus: 'Shoulders',
    type: 'Strength Training',
    exercises: [
      { name: 'Overhead Shoulder Press', sets: '4 Sets', reps: '10 Reps' },
      { name: 'Lateral Raises', sets: '3 Sets', reps: '12 Reps' },
      { name: 'Front Raises', sets: '3 Sets', reps: '12 Reps' },
      { name: 'Face Pulls', sets: '3 Sets', reps: '15 Reps' }
    ],
    duration: '50 Min',
    status: 'Workout'
  },
  {
    id: 4,
    day: 'THURSDAY',
    focus: 'Legs',
    type: 'Strength Training',
    exercises: [
      { name: 'Barbell Squats', sets: '4 Sets', reps: '10 Reps' },
      { name: 'Leg Press', sets: '3 Sets', reps: '12 Reps' },
      { name: 'Leg Curls', sets: '3 Sets', reps: '12 Reps' },
      { name: 'Standing Calf Raises', sets: '3 Sets', reps: '15 Reps' }
    ],
    duration: '60 Min',
    status: 'Workout'
  },
  {
    id: 5,
    day: 'FRIDAY',
    focus: 'Chest & Back',
    type: 'Upper Body',
    exercises: [
      { name: 'Incline Bench Press', sets: '3 Sets', reps: '10 Reps' },
      { name: 'Pull Ups', sets: '3 Sets', reps: '8 Reps' },
      { name: 'Dumbbell Rows', sets: '3 Sets', reps: '12 Reps' },
      { name: 'Pec Deck Fly', sets: '3 Sets', reps: '12 Reps' }
    ],
    duration: '55 Min',
    status: 'Workout'
  },
  {
    id: 6,
    day: 'SATURDAY',
    focus: 'Arms & Abs',
    type: 'Strength Training',
    exercises: [
      { name: 'Barbell Bicep Curl', sets: '3 Sets', reps: '12 Reps' },
      { name: 'Hammer Curl', sets: '3 Sets', reps: '12 Reps' },
      { name: 'Tricep Dips', sets: '3 Sets', reps: '10 Reps' },
      { name: 'Plank', sets: '3 Sets', reps: '30 Sec' }
    ],
    duration: '45 Min',
    status: 'Workout'
  },
  {
    id: 7,
    day: 'SUNDAY',
    focus: 'Rest & Recovery',
    type: 'Recovery',
    exercises: [
      { name: 'Light Walking', sets: 'Optional', reps: '15–20 Min' },
      { name: 'Full Body Stretching', sets: 'Optional', reps: '10 Min' },
      { name: 'Mobility Exercises', sets: 'Optional', reps: '10 Min' }
    ],
    duration: 'Recovery Day',
    status: 'Rest'
  }
]
