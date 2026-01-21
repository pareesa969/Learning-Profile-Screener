export function generateProfileCode({ learningStyle, focusLevel, readingTolerance }) {
  const dominantStyle =
    Object.entries(learningStyle)
      .sort((a, b) => b[1] - a[1])[0][0]

  const styleLetter =
    dominantStyle === 'visual' ? 'V' :
    dominantStyle === 'auditory' ? 'A' :
    'K'

  const focusLetter =
    focusLevel === 'High' ? 'H' :
    focusLevel === 'Medium' ? 'M' :
    'L'

  const readingLetter =
    readingTolerance === 'High' ? 'R' :
    readingTolerance === 'Medium' ? 'S' :
    'F'

  return `${styleLetter}-${focusLetter}${readingLetter}`
}
