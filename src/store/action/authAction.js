import * as actionType from '../actionType'

export const addUserName = (username) => {
  return {
    type: actionType.ADD_USER_NAME,
    payload: {
      username,
    },
  }
}