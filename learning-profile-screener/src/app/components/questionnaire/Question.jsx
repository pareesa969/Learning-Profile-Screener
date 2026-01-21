import RadioQuestion from './RadioQuestion'
import SliderQuestion from './SliderQuestion'

export default function Question({ question, value, onChange }) {
  if (question.type === 'radio') {
    return <RadioQuestion question={question} value={value} onChange={onChange} />
  }

  if (question.type === 'slider') {
    return <SliderQuestion question={question} value={value} onChange={onChange} />
  }

  return null
}
