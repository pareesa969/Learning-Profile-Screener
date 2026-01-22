const questions = [
  // SECTION 1: Attention & Focus
  {
    id: 1,
    section: 'Attention & Focus',
    text: 'When studying, how long can you usually stay focused before your mind drifts?',
    type: 'slider',
    options: ['0–5 min', '5–15 min', '15–30 min', '30+ min'],
    key: 'focus_duration',
  },
  {
    id: 2,
    section: 'Attention & Focus',
    text: 'Do you find it hard to start tasks even when you know they’re important?',
    type: 'radio',
    options: ['Almost always', 'Often', 'Sometimes', 'Rarely'],
    key: 'task_initiation',
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
      'I don’t get distracted easily',
    ],
    key: 'distraction_type',
  },

  // SECTION 2: Learning Style & Processing
  {
    id: 4,
    section: 'Learning Style',
    text: 'You understand something best when it is…',
    type: 'radio',
    options: [
      'Explained with diagrams or visuals',
      'Explained verbally',
      'Written step-by-step',
      'Shown through examples or practice',
    ],
    key: 'learning_preference',
  },
  {
    id: 5,
    section: 'Learning Style',
    text: 'When given written instructions, how do you usually feel?',
    type: 'radio',
    options: [
      'Comfortable and clear',
      'Okay but slow',
      'Easily overwhelmed',
      'I prefer someone explaining it',
    ],
    key: 'reading_tolerance',
  },
  {
    id: 6,
    section: 'Learning Style',
    text: 'Do you need to re-read information multiple times to understand it?',
    type: 'radio',
    options: ['Yes, almost always', 'Often', 'Sometimes', 'Rarely'],
    key: 're_reading',
  },

  // SECTION 3: Organisation & Memory
  {
    id: 7,
    section: 'Organisation & Memory',
    text: 'How organised do your study materials usually feel?',
    type: 'slider',
    options: ['Very disorganised', 'Somewhat disorganised', 'Mostly organised', 'Very organised'],
    key: 'organisation',
  },
  {
    id: 8,
    section: 'Organisation & Memory',
    text: 'Do you forget deadlines or tasks unless you write them down?',
    type: 'radio',
    options: ['Almost always', 'Often', 'Sometimes', 'Rarely'],
    key: 'forgetfulness',
  },
  {
    id: 9,
    section: 'Organisation & Memory',
    text: 'Which best describes how you remember information?',
    type: 'radio',
    options: [
      'I remember visuals',
      'I remember explanations',
      'I remember by doing',
      'I struggle without repetition',
    ],
    key: 'memory_style',
  },

  // SECTION 4: Sensory & Environment
  {
    id: 10,
    section: 'Environment',
    text: 'What study environment works best for you?',
    type: 'radio',
    options: ['Quiet and calm', 'Light background noise', 'Music', 'Flexible / doesn’t matter'],
    key: 'environment',
  },
  {
    id: 11,
    section: 'Environment',
    text: 'Bright lights, noise, or clutter make studying…',
    type: 'radio',
    options: ['Very difficult', 'Somewhat harder', 'No difference', 'Easier'],
    key: 'sensory_sensitivity',
  },

  // SECTION 5: Emotional Response
  {
    id: 12,
    section: 'Emotional Response',
    text: 'How do you usually feel when faced with a difficult academic task?',
    type: 'radio',
    options: ['Anxious or overwhelmed', 'Avoidant / procrastinating', 'Motivated to try', 'Neutral'],
    key: 'emotional_response',
  },
  {
    id: 13,
    section: 'Emotional Response',
    text: 'Do you perform better when tasks are broken into smaller steps?',
    type: 'radio',
    options: ['Yes, definitely', 'Sometimes', 'Not really'],
    key: 'chunking',
  },

  // SECTION 6: Self-Awareness
  {
    id: 14,
    section: 'Self-Awareness',
    text: 'Do you feel traditional teaching methods fully work for you?',
    type: 'radio',
    options: ['Yes', 'Sometimes', 'Not really', 'No'],
    key: 'traditional_fit',
  },
  {
    id: 15,
    section: 'Self-Awareness',
    text: 'Would you prefer learning tools that adapt to your pace and style?',
    type: 'radio',
    options: ['Yes', 'Maybe', 'No preference'],
    key: 'adaptive_tools',
  },
]

export default questions
