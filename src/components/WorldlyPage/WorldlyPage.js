import otherWorldly from '../../utils/beautifulWorldData';
import './WorldlyPage.css';

const WorldlyPage = () => {
  console.log('otherWorldly: ', otherWorldly)
  const worldlyData = otherWorldly.map(elem => {
    return <img src={elem.img} />
  })

  return (
    <section>
      {worldlyData}
    </section>
  )
}


export default WorldlyPage;