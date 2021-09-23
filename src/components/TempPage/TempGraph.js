import React from 'react';
import { Group } from '@visx/group';
import { curveBasis } from '@visx/curve';
import { LinePath } from '@visx/shape';
// import { Threshold } from '@visx/threshold';
import { scaleTime, scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns, Grid } from '@visx/grid';
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import './TempPage.css';

// export const background = '#f3f3f3';

const TempGraph = ({ temperatureData }) => {
  let tempDate = ''
  let tempStation = ''
  let tempLand = ''

  temperatureData.map(temp => {
    tempDate = temp.time
    tempStation = temp.station
    tempLand = temp.land
  })
  console.log('temperatureData: ', temperatureData)
  // console.log('tempGraph: ', tempGraph)

// accessors
const date = (temperatureData) => new Date(temperatureData.time).valueOf();
console.log('date: ', date)
const ny = (temperatureData) => Number(temperatureData.station);
console.log('ny: ', ny)
const sf = (temperatureData) => Number(temperatureData.land);
console.log('sf: ', sf)

// const tempDate = temperatureData.time
// const tempStation = temperatureData.station
// const tempLand = temperatureData.land
console.log('tempDate: ', tempDate)
console.log('tempStation', tempStation)
console.log('tempLand', tempLand)

// scales
const timeScale = scaleTime({
  domain: [Math.min(...temperatureData.map(date)), Math.max(...temperatureData.map(date))],
});
const temperatureScale = scaleLinear({
  domain: [
    Math.min(...temperatureData.map(d => Math.min(ny(d), sf(d)))),
    Math.max(...temperatureData.map(d => Math.max(ny(d), sf(d)))),
  ],
  nice: true,
});

// const defaultMargin = { 
//   top: 40, 
//   right: 30, 
//   bottom: 50, 
//   left: 40 
// };

// export type ThresholdProps = {
const width = 500
const height = 250
const margin = { 
  top: 50,
  right: 50,
  bottom: 50,
  left: 50 
}
// };

// export default function Theshold({ width, height, margin = defaultMargin }: ThresholdProps) {
//   if (width < 10) return null;

  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  timeScale.range([0, xMax]);
  temperatureScale.range([yMax, 0]);

  return (
    <div>
      <svg width={width} height={height}>

        <rect 
          x={0} 
          y={0} 
          width={width} 
          height={height} 
          fill={'#ffffff'} 
          rx={14} 
        />

        <Group left={margin.left} top={margin.top}>

          {/* <GridRows 
            scale={temperatureScale} 
            width={xMax} 
            height={yMax} 
            stroke="#e0e0e0" 
          />

          <GridColumns 
            scale={timeScale} 
            width={xMax} 
            height={yMax} 
            stroke="#e0e0e0" 
          /> */}


          <Grid
            xScale={timeScale}
            yScale={temperatureScale}
            width={xMax}
            height={yMax}
            // numTicksRows={numTicksForHeight(height)}
            // numTicksColumns={numTicksForWidth(width)}
          />


          <line 
            x1={xMax} 
            x2={xMax} 
            y1={0} 
            y2={yMax} 
            stroke="#e0e0e0" 
          />

          <AxisBottom 
            top={yMax} 
            scale={timeScale} 
            numTicks={width > 520 ? 10 : 5} 
          />

          <AxisLeft scale={temperatureScale} />

          <text 
            x="-70" 
            y="15" 
            transform="rotate(-90)" 
            fontSize={10}
            >Temperature (°F)
          </text>

          {/* <Threshold
          // <CityTemperature>
            id={`${Math.random()}`}
            data={cityTemperature}
            x={d => timeScale(date(d)) ?? 0}
            y0={d => temperatureScale(ny(d)) ?? 0}
            y1={d => temperatureScale(sf(d)) ?? 0}
            clipAboveTo={0}
            clipBelowTo={yMax}
            curve={curveBasis}
            belowAreaProps={{
              fill: 'violet',
              fillOpacity: 0.4,
            }}
            aboveAreaProps={{
              fill: 'green',
              fillOpacity: 0.4,
            }}
          /> */}

          <LinePath
            data={temperatureData}
            curve={curveBasis}
            x={d => timeScale(date(d)) ?? 0}
            y={d => temperatureScale(sf(d)) ?? 0}
            stroke="#222"
            strokeWidth={1.5}
            strokeOpacity={0.8}
            strokeDasharray="1,2"
          />

          <LinePath
            data={temperatureData}
            curve={curveBasis}
            x={d => timeScale(date(d)) ?? 0}
            y={d => temperatureScale(ny(d)) ?? 0}
            stroke="#222"
            strokeWidth={1.5}
          />

        </Group>
      </svg>
    </div>
  );
}





export default TempGraph;