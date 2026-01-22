import PieChart from './PieChart'
import BarChart from './BarChart'

export default function Results({ profile }) {
  return (
    <div
      id="profile-pdf"
      className="space-y-10 bg-[var(--bg-panel)] p-8 rounded-xl"
    >
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black mb-2">
          Your Learning Profile
        </h2>
        <p className="text-sm text-gray-700">
          Profile Code:{' '}
          <strong>{profile.profileCode}</strong>
        </p>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-4 text-black">
            Learning Style Distribution
          </h3>
          <PieChart learningStyle={profile.learningStyle} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-4 text-black">
            Strength Indicators
          </h3>
          <BarChart
            focusLevel={profile.focusLevel}
            readingTolerance={profile.readingTolerance}
          />
        </div>
      </div>

      {/* Notes */}
      {profile.notes?.length > 0 && (
        <div className="bg-[var(--accent-soft)] rounded-xl p-6">
          <h4 className="font-semibold mb-2 text-black">
            Observations
          </h4>
          <ul className="list-disc pl-5 text-sm text-black">
            {profile.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Disclaimer */}
      <div className="text-xs text-gray-600 text-center max-w-xl mx-auto">
        <p>
          This tool does not diagnose learning or medical
          conditions. It highlights learning preferences only.
        </p>
        <p className="mt-2">
          All calculations happen locally in your browser.
        </p>
      </div>
    </div>
  )
}
