import PieChart from './PieChart'
import BarChart from './BarChart'

export default function Results({ profile }) {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          Your Learning Profile
        </h2>
        <p className="text-sm text-gray-600">
          Profile Code: <strong>{profile.profileCode}</strong>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-4">
            Learning Style Preference
          </h3>
          <PieChart learningStyle={profile.learningStyle} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-4">
            Strength Indicators
          </h3>
          <BarChart
            focusLevel={profile.focusLevel}
            readingTolerance={profile.readingTolerance}
          />
        </div>
      </div>

      {profile.notes.length > 0 && (
        <div className="bg-[var(--accent-soft)] rounded-xl p-6">
          <h4 className="font-semibold mb-2">
            Observations
          </h4>
          <ul className="list-disc pl-5 text-sm">
            {profile.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
