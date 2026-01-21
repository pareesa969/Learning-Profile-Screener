'use client'

import Screener from '@/components/questionnaire/Question'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Learning Profile Screener
      </h1>

      <Screener />
    </main>
  )
}
