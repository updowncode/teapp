import * as types from './types'

/**
 * Set loading status on/off
 * @param {boolean} yes Loading status
 */
export const loading = (yes: boolean = true) => {
  return {
    type: types.SET_LOADING,
    payload: yes
  }
}
