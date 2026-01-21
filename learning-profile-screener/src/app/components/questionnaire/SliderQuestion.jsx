export default function SliderQuestion({ question, value, onChange }) {
  return (
    <div className="space-y-4">
      <input
        type="range"
        min="0"
        max={question.options.length - 1}
        value={value ?? 0}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--accent-primary)]"
      />

      <div className="flex justify-between text-sm text-[var(--text-muted)]">
        {question.options.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
    </div>
  )
}
