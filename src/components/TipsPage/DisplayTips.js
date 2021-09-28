import PropTypes from 'prop-types';
import saved from '../../bookmark-fill.png';
import './TipsPage.css';

const DisplayTips = ({ favoriteTips, updateFavorite }) => {
  const getFavorites = favoriteTips.map(favorite => {
    return (
      <article key={favorite.id}>
        <div className='saved-tips'>
          <img 
            onClick={() => updateFavorite(favorite)}
            className='bookmark-icon-smaller' 
            src={saved} 
          />
          <p>{favorite.tip}</p>
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

DisplayTips.propTypes = {
  favoriteTips: PropTypes.array
}


export default DisplayTips;