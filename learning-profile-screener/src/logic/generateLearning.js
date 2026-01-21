export default function generateLearningProfile(answers) {
  let visual = 0
  let auditory = 0
  let kinesthetic = 0

  let focusScore = 0
  let readingScore = 0

  const notes = []

  // Q1 — Focus duration (slider)
  if (answers.focus_duration !== undefined) {
    focusScore += answers.focus_duration
  }

  // Q4 — Learning style preference
  switch (answers.learning_preference) {
    case 'Explained with diagrams or visuals':
      visual += 3
      notes.push('Prefers visual explanations')
      break
    case 'Explained verbally':
      auditory += 3
      break
    case 'Written step-by-step':
      readingScore += 2
      break
    case 'Shown through examples or practice':
      kinesthetic += 3
      break
  }

  // Q5 — Reading tolerance
  switch (answers.reading_tolerance) {
    case 'Comfortable and clear':
      readingScore += 3
      break
    case 'Okay but slow':
      readingScore += 2
      break
    case 'Easily overwhelmed':
      readingScore += 0
      notes.push('May experience reading overload')
      break
    case 'I prefer someone explaining it':
      auditory += 2
      break
  }

  // Q9 — Memory style
  switch (answers.memory_style) {
    case 'I remember visuals':
      visual += 2
      break
    case 'I remember explanations':
      auditory += 2
      break
    case 'I remember by doing':
      kinesthetic += 2
      break
    case 'I struggle to remember without repetition':
      notes.push('Benefits from repetition')
      break
  }

  const totalStyle = visual + auditory + kinesthetic || 1

  const learningStyle = {
    visual: Math.round((visual / totalStyle) * 100),
    auditory: Math.round((auditory / totalStyle) * 100),
    kinesthetic: Math.round((kinesthetic / totalStyle) * 100)
  }

  const focusLevel =
    focusScore <= 1 ? 'Low' :
    focusScore <= 2 ? 'Medium' :
    'High'

  const readingTolerance =
    readingScore <= 2 ? 'Low' :
    readingScore <= 4 ? 'Medium' :
    'High'

  const profileCode = generateProfileCode({
    learningStyle,
    focusLevel,
    readingTolerance
  })

  return {
    profileCode,
    learningStyle,
    focusLevel,
    readingTolerance,
    notes
  }
}
