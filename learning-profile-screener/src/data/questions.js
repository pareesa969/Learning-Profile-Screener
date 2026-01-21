const questions = [
  {
    id: 1,
    section: 'Attention & Focus',
    text: 'When studying, how long can you usually stay focused before your mind drifts?',
    type: 'slider',
    options: ['0–5 min', '5–15 min', '15–30 min', '30+ min'],
    key: 'focus_duration'
  },
  {
    id: 2,
    section: 'Attention & Focus',
    text: 'Do you find it hard to start tasks even when you know they’re important?',
    type: 'radio',
    options: ['Almost always', 'Often', 'Sometimes', 'Rarely'],
    key: 'task_initiation'
  },
  {
    id: 3,
    section: 'Attention & Focus',
    text: 'What usually breaks your concentration the most?',
    type: 'radio',
    options: [
      'Background noise',
      'My own thoughts',
      'Phone / notifications',
      'Visual clutter',
      'I don’t get distracted easily'
    ],
    key: 'distraction_type'
  }
  // Remaining questions will be appended later
]

export default questions
