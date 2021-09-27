import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './PolarPage.css';

const PolarGraph = ({ polarData }) => {

  return (  
    <XYPlot
    width={700}
    height={250}
    yDomain={[3, 8]}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
        <LineSeries
        color="#B8466F"
        data={polarData.map(elem => ({
          ...elem,
          x: elem.year,
          y: elem.extent
        }))}
        />
      <XAxis title='YEAR' />
      <YAxis title='Million sq. km' />
    </XYPlot>
  )
};


export default PolarGraph;
