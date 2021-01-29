import * as actionType from '../actionType'

const initState = {
  username: ''
}

const authReducers = (state = initState,action) => {
  switch(action.type) {
    case actionType.ADD_USER_NAME:
      return {
        ...state,
        username: action.payload.username
      }
    default:
      return state
  }
}

export default authReducers