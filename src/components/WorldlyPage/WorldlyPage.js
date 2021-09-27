import otherWorldly from '../../utils/beautifulWorldData';
import './WorldlyPage.css';

const WorldlyPage = () => {
  console.log('otherWorldly: ', otherWorldly)
  const worldlyData = otherWorldly.map(elem => {
    return <img className='worldly-image' src={elem.img} alt={elem.description}/>
  })

  return (
    <section className='worldly-container'>
      {worldlyData}
    </section>
  )
}


export default WorldlyPage;