// import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import {XYPlot, XAxis, YAxis, LineMarkSeries, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, MarkSeries, LineSeries, CircularGridLines} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './PolarPage.css';

const PolarGraph = ({ polarData }) => {

  
  const margin = {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  };
  
  const WIDTH = 300;
  const HEIGHT = 300;



  return (  
    <XYPlot
    width={600}
    height={300}>
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
        <LineSeries
      color="#06762B"
      data={polarData.map(elem => ({
        ...elem,
        // x: elem.year,
        y: elem.trend
      }))}
    />
    <XAxis title='YEAR' />
    <YAxis title='EXTENT' />
  </XYPlot>
  )
};


export default PolarGraph;


{/* <XYPlot
margin={margin}
xDomain={[-3, 3]}
yDomain={[-3, 3]}
width={WIDTH}
height={HEIGHT}
>
<CircularGridLines />
<XAxis top={(HEIGHT - margin.top) / 2} />
<YAxis left={(WIDTH - margin.left - margin.right) / 2} />
<LineSeries
  color="#B8466F"
  strokeWidth={2}
  sizeRange={[5, 15]}
  data={polarData.map(elem => ({
    ...elem,
    x: Math.cos(elem.extent) * elem.extent,
    y: Math.sin(elem.area) * elem.area
  }))}
/>
</XYPlot> */}