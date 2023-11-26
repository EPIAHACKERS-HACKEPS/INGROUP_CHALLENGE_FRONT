import React, { useState } from 'react';
import './styles.css'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

interface IData {
  name: string;
  value: number;
}


const Example: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data: IData[] = [
    { name: 'Feature', value: 6 },
    { name: 'Bug', value: 4 },
  ];
  
  const getColor = (name: string) => {
    return name === 'Feature' ? 'green' : '#881d1c';
  };
  
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
  
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const coloredData = data.map(item => ({
    ...item,
    fill: getColor(item.name)
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={600} height={600}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={coloredData}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Example;
