import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './TempPage.css';

const TempGraph = ({ temperatureData }) => {
  return (
    <XYPlot
      width={600}
      height={300}>
      <HorizontalGridLines />
      <LineSeries
        color="#B8466F"
        data={ [
          {x: 1, y: 8},
          {x: 2, y: 10},
          {x: 3, y: 15}
        ]}
      />
      <XAxis title='X' />
      <YAxis title='Y' />
    </XYPlot>
  )
}


export default TempGraph;