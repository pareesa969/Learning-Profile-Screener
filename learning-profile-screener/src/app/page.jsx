'use client'

import { useReducer, useEffect, useMemo } from 'react'

import questions from '@/data/questions'

import Question from '@/app/components/questionnaire/Question'
import ProgressBar from '@/app/components/questionnaire/ProgressBar'
import Results from '@/app/components/results/Results'

import generateLearningProfile from '@/logic/generateLearning'
import { screenerReducer, initialState } from '@/logic/screenerReducer'

export default function Home() {
  const [state, dispatch] = useReducer(
    screenerReducer,
    initialState,
    () => {
      if (typeof window === 'undefined') return initialState
      const saved = localStorage.getItem('learning-profile-screener')
      return saved ? JSON.parse(saved) : initialState
    }
  )

  const { currentIndex, answers, isComplete } = state
  const currentQuestion = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1

  // Persist progress locally
  useEffect(() => {
    localStorage.setItem(
      'learning-profile-screener',
      JSON.stringify(state)
    )
  }, [state])

  // Generate profile only when completed
  const profile = useMemo(() => {
    if (!isComplete) return null
    return generateLearningProfile(answers)
  }, [isComplete, answers])

  /* =========================
     RESULTS VIEW
     ========================= */
  if (isComplete && profile) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-10">
        <Results profile={profile} />

        <div className="text-center mt-8">
          <button
            onClick={() => dispatch({ type: 'RESET' })}
            className="px-6 py-2 rounded-lg border border-gray-400 text-white"
          >
            Restart Screener
          </button>
        </div>
      </main>
    )
  }

  /* =========================
     QUESTIONNAIRE VIEW
     ========================= */
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <ProgressBar
        current={currentIndex + 1}
        total={questions.length}
      />

      <div className="bg-[var(--bg-panel)] text-black rounded-xl p-8 shadow">
        <h2 className="text-sm font-semibold text-[var(--accent-secondary)] mb-2">
          {currentQuestion.section}
        </h2>

        <p className="text-lg font-medium mb-6">
          {currentQuestion.text}
        </p>

        <Question
          question={currentQuestion}
          value={answers[currentQuestion.key]}
          onChange={(value) =>
            dispatch({
              type: 'ANSWER',
              key: currentQuestion.key,
              value,
            })
          }
        />

        <div className="flex justify-between mt-8">
          <button
            onClick={() => dispatch({ type: 'PREV' })}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-lg border border-gray-400 disabled:opacity-40"
          >
            Back
          </button>

          <button
            onClick={() =>
              dispatch({
                type: isLastQuestion ? 'COMPLETE' : 'NEXT',
              })
            }
            disabled={answers[currentQuestion.key] === undefined}
            className="px-6 py-2 rounded-lg bg-[var(--accent-primary)] text-black font-semibold disabled:opacity-40"
          >
            {isLastQuestion ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </main>
  )
}
