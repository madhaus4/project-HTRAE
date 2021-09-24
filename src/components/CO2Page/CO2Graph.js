import './CO2Page.css';

const CO2Graph = ({ CO2Data }) => {
  let mappedData = CO2Data.map(elem => {
    return (
      <article>
        <h2>{`date: ${elem.month}-${elem.year}`}</h2>
        <h2>{`cycle: ${elem.cycle}`}</h2>
        <h2>{`trend: ${elem.trend}`}</h2>
      </article>
    )
  })
  return mappedData
}


export default CO2Graph;