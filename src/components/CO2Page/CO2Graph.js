import PropTypes from 'prop-types';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './CO2Page.css';



const CO2Graph = ({ CO2Data }) => {

  return (
    <XYPlot
      width={700}
      height={250}
      yDomain={[385, 420]}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <LineSeries
        color='#B8466F'
        data={CO2Data.map(elem => ({
          ...elem,
          x: elem.year,
          y: elem.trend
        }))}
      />
      <XAxis title='YEAR' />
      <YAxis title='Part per million' />
    </XYPlot>
  )
};

CO2Graph.propTypes = {
  CO2Data: PropTypes.array
}


export default CO2Graph;
