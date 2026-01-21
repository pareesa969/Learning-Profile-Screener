'use client'

import { useReducer } from 'react'
import questions from '@/data/questions'
import Question from '@/components/questionnaire/Question'
import ProgressBar from '@/app/components/questionnaire/ProgressBar'
import {
  screenerReducer,
  initialState
} from '@/logic/screenerReducer'

export default function Home() {
  const [state, dispatch] = useReducer(screenerReducer, initialState)
  const { currentIndex, answers, isComplete } = state

  const currentQuestion = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1
  const currentAnswer = answers[currentQuestion?.key]

  const handleAnswer = (value) => {
    dispatch({
      type: 'ANSWER_QUESTION',
      key: currentQuestion.key,
      value
    })
  }

  const handleNext = () => {
    if (isLastQuestion) {
      dispatch({ type: 'COMPLETE' })
    } else {
      dispatch({ type: 'NEXT' })
    }
  }

  const handleBack = () => {
    dispatch({ type: 'PREVIOUS' })
  }

  if (isComplete) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-[var(--bg-panel)] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Questionnaire Complete
          </h2>

          <p className="text-[var(--text-muted)]">
            Processing your learning profile…
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <ProgressBar
        current={currentIndex + 1}
        total={questions.length}
      />

      <div className="bg-[var(--bg-panel)] text-black rounded-xl p-6 shadow">
        <h2 className="text-sm font-semibold text-[var(--accent-secondary)] mb-2">
          {currentQuestion.section}
        </h2>

        <p className="text-lg font-medium mb-6">
          {currentQuestion.text}
        </p>

        <Question
          question={currentQuestion}
          value={currentAnswer}
          onChange={handleAnswer}
        />

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-lg border border-gray-400 disabled:opacity-40"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={currentAnswer === undefined}
            className="px-6 py-2 rounded-lg bg-[var(--accent-primary)] font-semibold disabled:opacity-40"
          >
            {isLastQuestion ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </main>
  )
}
