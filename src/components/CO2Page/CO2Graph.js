import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './CO2Page.css';



const CO2Graph = ({ CO2Data }) => {
  // let mappedData = CO2Data.map(elem => {

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




