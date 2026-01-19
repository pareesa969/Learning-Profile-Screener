"use client"

import { useState } from "react"
import Button from "@mui/material/Button"
import QuestionCard from "@/components/QuestionCard"
import RadioQuestion from "@/components/RadioQuestion"
import SliderQuestion from "@/components/SliderQuestion"
import ProgressBar from "@/components/ProgressBar"
import { questions } from "@/data/questions"
import { generateLearningProfile } from "@/logic/generateLearningProfile"
import { useRouter } from "next/navigation"

export default function ScreenerPage() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const router = useRouter()

  const question = questions[index]

  function handleNext() {
    const isLast = index === questions.length - 1

    if (isLast) {
      const profile = generateLearningProfile(answers)
      sessionStorage.setItem(
        "learningProfile",
        JSON.stringify(profile)
      )
      router.push("/results")
    } else {
      setIndex((prev) => prev + 1)
    }
  }

  return (
    <main className="min-h-screen bg-[#0A0A1A] text-white p-6">
      <ProgressBar current={index + 1} total={questions.length} />

      <QuestionCard title={question.text}>
        {question.type === "radio" && (
          <RadioQuestion
            options={question.options}
            value={answers[question.id]}
            onChange={(val) =>
              setAnswers({ ...answers, [question.id]: val })
            }
          />
        )}

        {question.type === "slider" && (
          <SliderQuestion
            labels={question.options}
            value={answers[question.id] ?? 0}
            onChange={(val) =>
              setAnswers({ ...answers, [question.id]: val })
            }
          />
        )}

        <div className="pt-6 text-right">
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={answers[question.id] === undefined}
          >
            {index === questions.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </QuestionCard>
    </main>
  )
}
