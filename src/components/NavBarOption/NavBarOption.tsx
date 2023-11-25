import React, { type ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDashboardOption } from '../../reducers/dashboardNavBar'
import { NavBarOptionText } from './styles'

interface NavBarOptionProps {
  name: string
  optionNumber: number
}

const NavBarOption = ({ name, optionNumber }: NavBarOptionProps): ReactElement => {
  const dispatch = useDispatch()
  const getDashboardOption = useSelector((state: any) => state.dashboardReducer.selected)

  const handleOnClick = (): void => {
    dispatch(setDashboardOption(optionNumber))
  }

  return (
    <NavBarOptionText onClick={handleOnClick} selected={getDashboardOption === optionNumber}>
      {name}
    </NavBarOptionText>
  )
}

export default NavBarOption
