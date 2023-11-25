import { createSlice } from '@reduxjs/toolkit'

interface DashboardState {
  selected: number
}

const initialState: DashboardState = {
  selected: -1
}

interface DashboardAction {
  type: string
  payload: number
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    dashboardOption: (state: DashboardState, action: DashboardAction) => {
      switch (action.type) {
        case 'selectDashboard':
          state = {
            selected: action.payload
          }
          break
        default:
          console.log('No such day exists!')
          break
      }
      return state
    }
  }
})

export const setDashboardOption = (option: number): DashboardAction => {
  return {
    type: 'selectDashboard',
    payload: option
  }
}

export const getDashboardOption = (state: DashboardState): number => {
  return state.selected
}

export default dashboardSlice.reducer
