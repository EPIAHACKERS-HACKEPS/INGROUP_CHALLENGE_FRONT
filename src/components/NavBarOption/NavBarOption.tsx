import React, { type ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { setDashboardOption } from '../../reducers/dashboardNavBar'

interface NavBarOptionProps {
  name: string
  optionNumber: number
}

const NavBarOption = ({ name, optionNumber }: NavBarOptionProps): ReactElement => {
  const dispatch = useDispatch()
  // const getDashboardOption = useSelector(getDashboardOption)
  const handleOnClick = (): void => {
    dispatch(setDashboardOption(optionNumber))
  }

  return (
    <div>
      <h1 onClick={handleOnClick}>{name}</h1>
    </div>
  )
}

export default NavBarOption
