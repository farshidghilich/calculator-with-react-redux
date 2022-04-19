import calc from './calc'
import { CALCULATE_RESULT, SAVE_RESULT, ERROR_RESULT } from './constants'

export const sumCalc = (input) => (dispatch, getState) => {
  const { sum } = getState().sum
  const newSum = calc(input)
  dispatch({ type: CALCULATE_RESULT, payload: newSum })
  if (typeof newSum !== 'number' || isNaN(newSum)) {
    dispatch({ type: ERROR_RESULT })
  } else {
    dispatch({ type: SAVE_RESULT, payload: [...sum, newSum] })
  }
}
