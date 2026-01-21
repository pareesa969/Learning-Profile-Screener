export const initialState = {
  currentIndex: 0,
  answers: {},
  isComplete: false
}

export function screenerReducer(state, action) {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.key]: action.value
        }
      }

    case 'NEXT':
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      }

    case 'PREVIOUS':
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0)
      }

    case 'COMPLETE':
      return {
        ...state,
        isComplete: true
      }

    case 'RESET':
      return initialState

    default:
      return state
  }
}
