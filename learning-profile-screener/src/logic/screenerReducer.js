export const initialState = {
  currentIndex: 0,
  answers: {},
  isComplete: false,
}

export function screenerReducer(state, action) {
  switch (action.type) {
    case 'ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.key]: action.value,
        },
      }

    case 'NEXT':
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      }

    case 'PREV':
      return {
        ...state,
        currentIndex: Math.max(0, state.currentIndex - 1),
      }

    case 'COMPLETE':
      return {
        ...state,
        isComplete: true,
      }

    case 'RESET':
      localStorage.removeItem('learning-profile-screener')
      return initialState

    default:
      return state
  }
}
