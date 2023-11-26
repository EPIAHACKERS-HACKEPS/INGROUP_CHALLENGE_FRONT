import { type Action } from 'redux'

interface DashboardState {
  bugs: number
  features: number
}

const initialState: DashboardState = {
  bugs: 0,
  features: 0
}

interface DashboardAction extends Action {
  type: string
  payload: {
    bugs: number
    features: number
  }
}

export const dashboardCountReducer = (state = initialState, action: DashboardAction): DashboardState => {
  switch (action.type) {
    case 'setDashboardCount':
      return action.payload
    default:
      return state
  }
}

export const setDashboardCount = (option: {
  bugs: number
  features: number
}): DashboardAction => {
  return {
    type: 'setDashboardCount',
    payload: option
  }
}

export default dashboardCountReducer
