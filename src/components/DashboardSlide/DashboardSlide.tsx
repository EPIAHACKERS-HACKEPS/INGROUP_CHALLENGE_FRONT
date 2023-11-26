import React, { type ReactElement, useEffect } from 'react'
import Title from '../Title'
import { CardSection, GraphSection, GraphsSections, GraphTitle, Separator } from './styles'
import ProgressBar from './ProgressBar/ProgressBar'
import NumberBar from './NumberBar/NumberBar'
import { RiBugFill, RiPlantFill } from 'react-icons/ri'
import Graphs from './Graphs/Graphs'
import BarGraph from './Graphs/BarGraph/BarGraph'
import { useDispatch, useSelector } from 'react-redux'
import { setDashboardCount } from '../../reducers/dashboardCount'
import { PuffLoader } from 'react-spinners'

const DashboardSlide = (): ReactElement => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const token = useSelector((state: any) => state.loginReducer.token)
  const dispatch = useDispatch()
  const dashboardCount = useSelector((state: any) => state.dashboardCountReducer)

  useEffect(() => {
    setLoading(true)
    fetch('http://95.23.148.176:5000/api/v1/item/count', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
      }
    }).then(async (result) => {
      const response = await result.json()
      dispatch(setDashboardCount({
        bugs: response.bugs,
        features: response.feature_requests
      }))
    }).catch(() => {
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Title title={'Dashboard'} dark={true}/>
      <Separator/>
      <CardSection>
        {loading
          ? <>
            <PuffLoader
              color="#881d1c"
              size={100}
            />
          </>
          : <>
            <ProgressBar percentage={(dashboardCount.features / (dashboardCount.features + dashboardCount.bugs)) * 100}
                         name={'FEATURES'} color={'green'} icon={RiPlantFill}/>
            <NumberBar number={dashboardCount.features} name={'PENDING FEATURES'} color={'green'} icon={RiPlantFill}/>
            <ProgressBar percentage={(dashboardCount.bugs / (dashboardCount.features + dashboardCount.bugs)) * 100}
                         name={'BUGS'} color={'#881d1c'} icon={RiBugFill}/>
            <NumberBar number={dashboardCount.bugs} name={'PENDING BUGS'} color={'#881d1c'} icon={RiBugFill}/>
          </>}
      </CardSection>
      <GraphsSections>
        <GraphSection>
          <GraphTitle>Graph</GraphTitle>
          <Graphs/>
        </GraphSection>
        <GraphSection>
          <BarGraph/>
        </GraphSection>
      </GraphsSections>
    </>
  )
}

export default DashboardSlide
