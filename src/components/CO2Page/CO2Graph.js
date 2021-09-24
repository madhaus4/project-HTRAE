import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, AreaSeries} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './CO2Page.css';



const CO2Graph = ({ CO2Data }) => {

  return (
    <XYPlot width={600} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <AreaSeries
        className="area-series-example"
        curve="curveNatural"
        data={CO2Data.map(elem => ({
          ...elem,
          x: elem.year,
          y: elem.cycle
        }))}
      />
    </XYPlot>
  )
};


// const CO2Graph = ({ CO2Data }) => {
//   let mappedData = CO2Data.map(elem => {
//     return (
//       <article>
//         <h2>{`date: ${elem.month}-${elem.year}`}</h2>
//         <h2>{`cycle: ${elem.cycle}`}</h2>
//         <h2>{`trend: ${elem.trend}`}</h2>
//       </article>
//     )
//   })
//   return mappedData
// }


export default CO2Graph;




