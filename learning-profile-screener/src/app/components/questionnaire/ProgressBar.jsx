export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-[var(--text-muted)] mb-1">
        <span>Progress</span>
        <span>{current} / {total}</span>
      </div>

      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--accent-primary)] transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
