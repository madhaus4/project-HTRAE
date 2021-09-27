import saved from '../../bookmark-fill.png';
import './TipsPage.css';

const DisplayTips = ({ favoriteTips, updateFavorite }) => {
  const getFavorites = favoriteTips.map(favorite => {
    return (
      <article>
        <div className='saved-tips'>
          <img 
            onClick={() => updateFavorite(favorite)}
            className='arrow-icon' 
            src={saved} 
          />
          <p key={favorite.id}>{favorite.tip}</p>
        </div>
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