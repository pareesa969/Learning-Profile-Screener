export default function RadioQuestion({ question, value, onChange }) {
  return (
    <div className="space-y-3">
      {question.options.map((option, index) => {
        const selected = value === option

        return (
          <button
            key={index}
            type="button"
            onClick={() => onChange(option)}
            className={`w-full text-left px-4 py-3 rounded-lg border transition
              ${
                selected
                  ? 'bg-[var(--accent-secondary)] text-white border-transparent'
                  : 'bg-white text-black border-gray-300 hover:bg-[var(--accent-soft)]'
              }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
