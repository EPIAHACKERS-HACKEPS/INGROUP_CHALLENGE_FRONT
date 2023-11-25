import { type Action } from 'redux'

interface DashboardState {
  selected: number
}

const initialState: DashboardState = {
  selected: 0
}

interface DashboardAction extends Action {
  type: string
  payload: number
}

export const dashboardReducer = (state = initialState, action: DashboardAction): DashboardState => {
  switch (action.type) {
    case 'selectDashboard':
      return {
        selected: action.payload
      }
    default:
      return state
  }
}

export const setDashboardOption = (option: number): DashboardAction => {
  return {
    type: 'selectDashboard',
    payload: option
  }
}

export default dashboardReducer
