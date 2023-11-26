import React, { PureComponent } from 'react';
import './styles.css'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
// Define the type for the data items
interface IData {
  name: string;
  value: number;
}

// Data array with 10 features and 5 bugs
const data: IData[] = [
  { name: 'Feature', value: 6 },
  { name: 'Bug', value: 4 },
];

const getColor = (name: string) => {
    return name === 'Feature' ? 'green' : '#881d1c';
  };

// Render function for the active shape of the pie
const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

// Define the type for the component's state
interface IState {
  activeIndex: number;
}

const coloredData = data.map(item => ({
    ...item,
    fill: getColor(item.name)
  }));

// Component class
export default class Example extends PureComponent<{}, IState> {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state: IState = {
    activeIndex: 0,
  };

  onPieEnter = (_: any, index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={600}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={coloredData}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
