export default function RadioQuestion({ question, value, onChange }) {
  return (
    <div className="space-y-3">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onChange(option)}
          className={`w-full text-left px-4 py-3 rounded-lg border transition
            ${
              value === option
                ? 'bg-[var(--accent-secondary)] text-white'
                : 'bg-white hover:bg-[var(--accent-soft)]'
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
