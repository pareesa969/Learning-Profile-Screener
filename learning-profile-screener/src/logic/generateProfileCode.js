export default function generateProfileCode({
  learningStyle,
  focusLevel,
  readingTolerance,
}) {
  const dominantStyle =
    learningStyle.visual >= learningStyle.auditory &&
    learningStyle.visual >= learningStyle.kinesthetic
      ? 'V'
      : learningStyle.auditory >= learningStyle.kinesthetic
      ? 'A'
      : 'K'

  const focusLetter =
    focusLevel === 'High'
      ? 'H'
      : focusLevel === 'Medium'
      ? 'M'
      : 'L'

  const readingLetter =
    readingTolerance === 'High'
      ? 'R'
      : readingTolerance === 'Medium'
      ? 'S'
      : 'F'

  return `${dominantStyle}-${focusLetter}${readingLetter}`
}
