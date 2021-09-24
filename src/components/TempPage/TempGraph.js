import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './TempPage.css';

const TempGraph = ({ temperatureData }) => {
  return (
    <XYPlot
      width={600}
      height={300}
      yDomain={[-1.5, 2]}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <LineSeries
        color="#B8466F"
        data={temperatureData.map(elem => ({
          ...elem,
          x: elem.time,
          y: elem.land
        }))}
      />
      <XAxis title='YEAR'  />
      <YAxis title='TEMPERATUE C' />
    </XYPlot>
  )
}


export default TempGraph;


