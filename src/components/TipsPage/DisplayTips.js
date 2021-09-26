import './TipsPage.css';

const DisplayTips = ({ favoriteTips }) => {
  const getFavorites = favoriteTips.map(favorite => {
    return (
      <p key={Date.now()}>{favorite.tip}</p>
    )
  })

  return (
    <article>
      {getFavorites}
    </article>
  )
}


export default DisplayTips;