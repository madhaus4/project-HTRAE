// import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import {XYPlot, XAxis, YAxis, MarkSeries, LineSeries, CircularGridLines} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './PolarPage.css';

const PolarGraph = ({ polarData }) => {

  // const data = [
  //   {r: 1, theta: Math.PI / 3, size: 30},
  //   {r: 1.7, theta: (2 * Math.PI) / 3, size: 10},
  //   {r: 2, theta: Math.PI, size: 1},
  //   {r: 3, theta: (3 * Math.PI) / 2, size: 12},
  //   {r: 2.5, theta: Math.PI / 4, size: 4},
  //   {r: 0, theta: Math.PI / 4, size: 1}
  // ];
  
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
        strokeWidth={2}
        sizeRange={[5, 15]}
        data={polarData.map(elem => ({
          ...elem,
          x: Math.cos(elem.extent) * elem.extent,
          y: Math.sin(elem.area) * elem.area
        }))}
      />
    </XYPlot>
  )
};


export default PolarGraph;