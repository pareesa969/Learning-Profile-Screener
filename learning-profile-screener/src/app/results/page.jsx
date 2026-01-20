"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"

export default function ResultsPage() {
  const router = useRouter()

  const [profile] = useState(() => {
    if (typeof window === "undefined") return null

    const storedProfile = sessionStorage.getItem("learningProfile")

    if (!storedProfile) {
      router.replace("/screener")
      return null
    }

    return JSON.parse(storedProfile)
  })

  if (!profile) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        Loading results…
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0A0A1A] text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardContent className="space-y-4">
            <Typography variant="h4" fontWeight={700}>
              Your Learning Profile
            </Typography>

            <Typography variant="subtitle1" color="text.secondary">
              Profile Code: <strong>{profile.profileCode}</strong>
            </Typography>

            <Divider />

            <Typography variant="body1">
              {profile.insight}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3">
            <Typography variant="h6">Key Traits</Typography>

            <ul className="list-disc pl-6 text-gray-200 space-y-1">
              <li><strong>Learning Style:</strong> {profile.dominantStyle}</li>
              <li><strong>Focus:</strong> {profile.traits.focus}</li>
              <li><strong>Reading:</strong> {profile.traits.reading}</li>
              <li><strong>Organisation:</strong> {profile.traits.organisation}</li>
              <li><strong>Sensory:</strong> {profile.traits.sensory}</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-4">
          <Button
            variant="contained"
            onClick={() =>
              navigator.clipboard.writeText(
                JSON.stringify(profile, null, 2)
              )
            }
          >
            Copy Profile JSON
          </Button>

          <Button
            variant="outlined"
            onClick={() => router.push("/screener")}
          >
            Retake Screener
          </Button>
        </div>

        <p className="text-sm text-gray-400 pt-6">
          This tool does not diagnose learning or medical conditions.
          It highlights learning preferences only.
        </p>
      </div>
    </main>
  )
}
