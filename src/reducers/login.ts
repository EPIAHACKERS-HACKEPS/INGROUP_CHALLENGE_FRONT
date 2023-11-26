import { type Action } from 'redux'

interface LoginState {
  token: string | null
}

const initialState: LoginState = {
  token: null
}

interface LoginAction extends Action {
  type: string
  payload: string
}

export const loginReducer = (state = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'setLoginToken':
      return {
        token: action.payload
      }
    default:
      return state
  }
}

export const setLoginToken = (token: string): LoginAction => {
  return {
    type: 'setLoginToken',
    payload: token
  }
}

export default loginReducer
