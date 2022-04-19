import { CALCULATE_RESULT, SAVE_RESULT, ERROR_RESULT } from './constants'

export const sumReducer = (
  state = { sum: [], result: 0, error: false },
  action
) => {
  switch (action.type) {
    case CALCULATE_RESULT:
      return { ...state, result: action.payload, error: false }
    case SAVE_RESULT:
      return { ...state, sum: action.payload, error: false }
    case ERROR_RESULT:
      return { ...state, error: true }

    default:
      return state
  }
}
