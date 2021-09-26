import arrowFill from '../../arrow-fill.png';
import './TipsPage.css';

const DisplayTips = ({ favoriteTips }) => {
  const getFavorites = favoriteTips.map(favorite => {
    return (
      <article>
        <div className='saved-tips'>
          <img className='arrow-icon' src={arrowFill} />
          <p key={Date.now()}>{favorite.tip}</p>
        </div>
        <h4>X</h4>
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