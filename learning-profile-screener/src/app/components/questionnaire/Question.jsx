import RadioQuestion from './RadioQuestion'
import SliderQuestion from './SliderQuestion'

export default function Question({ question, value, onChange }) {
  if (!question) return null

  switch (question.type) {
    case 'radio':
      return (
        <RadioQuestion
          question={question}
          value={value}
          onChange={onChange}
        />
      )

    case 'slider':
      return (
        <SliderQuestion
          question={question}
          value={value}
          onChange={onChange}
        />
      )

    default:
      return null
  }
}
