import arrowFill from '../../arrow-fill.png';
import './TipsPage.css';

const DisplayTips = ({ favoriteTips }) => {
  const getFavorites = favoriteTips.map(favorite => {
    return (
      <article>
        <img className='arrow-icon' src={arrowFill} />
        <p key={Date.now()}>{favorite.tip}</p>
      </article>
    )
  })

  return (
    <section className='saved-tips-container'>
      {getFavorites}
    </section>
  )
}


export default DisplayTips;