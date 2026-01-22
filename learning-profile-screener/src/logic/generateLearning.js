import generateProfileCode from './generateProfileCode'

export default function generateLearningProfile(answers) {
  let visual = 0
  let auditory = 0
  let kinesthetic = 0
  let reading = 0
  let focus = answers.focus_duration ?? 0

  const notes = []

  // Learning preference
  if (answers.learning_preference === 'Explained with diagrams or visuals') {
    visual += 3
    notes.push('Prefers visual explanations')
  }
  if (answers.learning_preference === 'Explained verbally') auditory += 3
  if (answers.learning_preference === 'Shown through examples or practice')
    kinesthetic += 3
  if (answers.learning_preference === 'Written step-by-step') reading += 2

  // Reading tolerance
  if (answers.reading_tolerance === 'Comfortable and clear') reading += 3
  if (answers.reading_tolerance === 'Easily overwhelmed') {
    notes.push('May experience reading overload')
  }

  // Memory style
  if (answers.memory_style === 'I remember visuals') visual += 2
  if (answers.memory_style === 'I remember explanations') auditory += 2
  if (answers.memory_style === 'I remember by doing') kinesthetic += 2
  if (answers.memory_style === 'I struggle without repetition') {
    notes.push('Benefits from repetition')
  }

  const total = visual + auditory + kinesthetic || 1

  const learningStyle = {
    visual: Math.round((visual / total) * 100),
    auditory: Math.round((auditory / total) * 100),
    kinesthetic: Math.round((kinesthetic / total) * 100),
  }

  const focusLevel =
    focus <= 1 ? 'Low' : focus === 2 ? 'Medium' : 'High'

  const readingTolerance =
    reading <= 2 ? 'Low' : reading <= 4 ? 'Medium' : 'High'

  const profileCode = generateProfileCode({
    learningStyle,
    focusLevel,
    readingTolerance,
  })

  return {
    profileCode,
    learningStyle,
    focusLevel,
    readingTolerance,
    notes,
  }
}
