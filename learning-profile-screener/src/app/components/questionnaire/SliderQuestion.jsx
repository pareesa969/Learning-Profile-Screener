export default function SliderQuestion({ question, value, onChange }) {
  const currentValue = value ?? 0

  return (
    <div className="space-y-4">
      <input
        type="range"
        min={0}
        max={question.options.length - 1}
        step={1}
        value={currentValue}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--accent-primary)]"
      />

      <div className="flex justify-between text-xs text-[var(--text-muted)]">
        {question.options.map((label, index) => (
          <span
            key={index}
            className={index === currentValue ? 'font-semibold text-black' : ''}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
