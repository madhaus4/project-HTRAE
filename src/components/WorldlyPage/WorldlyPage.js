import otherWorldly from '../../utils/beautifulWorldData';
import './WorldlyPage.css';

const WorldlyPage = () => {
  const worldlyData = otherWorldly.map(elem => {
    return <img key={elem.id} className='worldly-image' src={elem.img} alt={elem.description}/>
  })

  return (
    <section className='worldly-container'>
      {worldlyData}
    </section>
  )
}


export default WorldlyPage;