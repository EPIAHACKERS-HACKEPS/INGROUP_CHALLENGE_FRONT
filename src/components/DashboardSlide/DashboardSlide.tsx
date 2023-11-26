import React, { type ReactElement } from 'react'
import Title from '../Title'
import { Separator, CardSection, GraphSection, GraphTitle, GraphsSections } from './styles'
import ProgressBar from './ProgressBar/ProgressBar'
import NumberBar from './NumberBar/NumberBar';
import { RiBugFill } from "react-icons/ri";
import { RiPlantFill } from "react-icons/ri";
import Graphs from './Graphs/Graphs';
import BarGraph from './Graphs/BarGraph/BarGraph';


const DashboardSlide = (): ReactElement => {
  return (
    <>
      <Title title={'Dashboard'} dark={true} />
      <Separator />
      <CardSection>
        <ProgressBar percentage={"60"} name={"FEATURES"} color={"green"} icon={RiPlantFill} />
        <NumberBar number={"6"} name={"PENDING FEATURES"} color={"green"} icon={RiPlantFill} />
        <ProgressBar percentage={"40"} name={"BUGS"} color={"#881d1c"} icon={RiBugFill} />
        <NumberBar number={"4"} name={"PENDING BUGS"} color={"#881d1c"} icon={RiBugFill} />
      </CardSection>
      <GraphsSections>
        <GraphSection>
          <GraphTitle>Graph</GraphTitle>
          <Graphs />
        </GraphSection>
        <GraphSection>
          <BarGraph />
        </GraphSection>
      </GraphsSections>
    </>
  )
}

export default DashboardSlide
