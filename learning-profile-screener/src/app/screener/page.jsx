"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "@mui/material/Button"

import QuestionCard from "@/components/QuestionCard"
import RadioQuestion from "@/components/RadioQuestion"
import SliderQuestion from "@/components/SliderQuestion"
import ProgressBar from "@/components/ProgressBar"

import { questions } from "@/data/questions"
import { generateLearningProfile } from "@/logic/generateLearningProfile"

export default function ScreenerPage() {
  const router = useRouter()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const currentQuestion = questions[currentIndex]

  function handleAnswer(value) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))
  }

  function handleNext() {
    const isLastQuestion = currentIndex === questions.length - 1

    if (isLastQuestion) {
      const profile = generateLearningProfile(answers)

      sessionStorage.setItem(
        "learningProfile",
        JSON.stringify(profile)
      )

      router.push("/results")
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  return (
    <main className="min-h-screen bg-[#0A0A1A] text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <ProgressBar
          current={currentIndex + 1}
          total={questions.length}
        />

        <QuestionCard title={currentQuestion.text}>
          {currentQuestion.type === "radio" && (
            <RadioQuestion
              options={currentQuestion.options}
              value={answers[currentQuestion.id]}
              onChange={handleAnswer}
            />
          )}

          {currentQuestion.type === "slider" && (
            <SliderQuestion
              labels={currentQuestion.options}
              value={answers[currentQuestion.id] ?? 0}
              onChange={handleAnswer}
            />
          )}

          <div className="pt-6 text-right">
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={answers[currentQuestion.id] === undefined}
            >
              {currentIndex === questions.length - 1
                ? "Finish"
                : "Next"}
            </Button>
          </div>
        </QuestionCard>
      </div>
    </main>
  )
}
