/**
 * Generate a learning profile from screener answers
 * @param {Object} answers - keyed by question id
 * @returns {Object} learning profile
 */
export function generateLearningProfile(answers) {
  // Base score buckets
  const scores = {
    visual: 0,
    auditory: 0,
    kinesthetic: 0,
    focus: 0,
    readingTolerance: 0,
    organisation: 0,
    sensorySensitivity: 0,
    stressResponse: 0,
  }

  // Helper to safely read answer
  const a = (id) => answers[id]


  // Q1 – Focus duration (slider)
  if (a(1) !== undefined) {
    scores.focus += a(1) // 0–3
  }

  // Q2 – Task initiation
  if (a(2)) {
    if (a(2) === "Almost always") scores.focus -= 2
    if (a(2) === "Often") scores.focus -= 1
    if (a(2) === "Rarely") scores.focus += 1
  }


  // Q4 – Primary learning style
  if (a(4)) {
    if (a(4).includes("visual")) scores.visual += 3
    if (a(4).includes("verbally")) scores.auditory += 3
    if (a(4).includes("practice")) scores.kinesthetic += 3
  }

  // Q9 – Memory encoding style
  if (a(9)) {
    if (a(9).includes("visual")) scores.visual += 2
    if (a(9).includes("explanations")) scores.auditory += 2
    if (a(9).includes("doing")) scores.kinesthetic += 2
  }


  // Q5 – Reading tolerance
  if (a(5)) {
    if (a(5).includes("Comfortable")) scores.readingTolerance += 2
    if (a(5).includes("Okay")) scores.readingTolerance += 1
    if (a(5).includes("overwhelmed")) scores.readingTolerance -= 2
  }

  // Q6 – Re-reading
  if (a(6)) {
    if (a(6).includes("almost always")) scores.readingTolerance -= 2
    if (a(6).includes("Rarely")) scores.readingTolerance += 1
  }


  // Q7 – Organisation slider
  if (a(7) !== undefined) {
    scores.organisation += a(7)
  }

  // Q8 – Forgetfulness
  if (a(8)) {
    if (a(8).includes("Almost always")) scores.organisation -= 2
    if (a(8).includes("Rarely")) scores.organisation += 1
  }


  // Q11 – Sensory sensitivity
  if (a(11)) {
    if (a(11).includes("Very difficult")) scores.sensorySensitivity += 2
    if (a(11).includes("Easier")) scores.sensorySensitivity -= 1
  }

  // Q12 – Emotional response
  if (a(12)) {
    if (a(12).includes("Anxious")) scores.stressResponse += 2
    if (a(12).includes("Motivated")) scores.stressResponse -= 1
  }


  const dominantStyle = getDominantStyle(scores)

  const focusLabel =
    scores.focus <= 1
      ? "Short focus bursts"
      : scores.focus <= 3
      ? "Moderate focus"
      : "Sustained focus"

  const readingLabel =
    scores.readingTolerance <= 0
      ? "Low reading tolerance"
      : scores.readingTolerance <= 2
      ? "Moderate reading tolerance"
      : "High reading tolerance"


  return {
    profileCode: `${dominantStyle.charAt(0)}-${focusLabel[0]}R`,
    dominantStyle,
    breakdown: {
      visual: scores.visual,
      auditory: scores.auditory,
      kinesthetic: scores.kinesthetic,
    },
    traits: {
      focus: focusLabel,
      reading: readingLabel,
      organisation:
        scores.organisation > 1 ? "Organised" : "Needs structure",
      sensory:
        scores.sensorySensitivity > 1
          ? "Sensory sensitive"
          : "Sensory tolerant",
    },
    insight: buildInsight(dominantStyle, focusLabel, readingLabel),
  }
}


function getDominantStyle(scores) {
  const styles = [
    { key: "visual", value: scores.visual },
    { key: "auditory", value: scores.auditory },
    { key: "kinesthetic", value: scores.kinesthetic },
  ]

  styles.sort((a, b) => b.value - a.value)
  return capitalize(styles[0].key)
}

function buildInsight(style, focus, reading) {
  return `You primarily learn through ${style.toLowerCase()} methods. 
You tend to work best with ${focus.toLowerCase()} and have ${reading.toLowerCase()}. 
Structured, distraction-aware learning tools are likely to support you best.`
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
