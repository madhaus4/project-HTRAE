import './HomePage.css';

const HomePage = () => {
  return (
    <section className='home-page-container'>
    <div>
      <h2>Worldwide, the climate crisis is felt.  Everything in our environment is changing and this change impacts everything around us.  If the global temperature continues to rise, effects will worsen.  We need all of humanity's help to reverse what we've already done as a society.</h2>
      <h3>Welcome to project HTRAE</h3>
      <p>Your quick resource on global warming effects.</p>
      <h4>What is climate change?</h4>
      <p>The short is that climate change is the long-term shifts in temperatures and weather patterns.  Mostly caused by human activities such as burning fossil fuels such as natural gases, oils and coal.  Burning these fossil fuels causes greenhouse as emissions that wrap around Earth and trap the sun's heat and rises temperatures.</p>
    </div>
    <div>
      <p>For more information: </p>
      <a href='https://www.un.org/en/climatechange'>UN on climate change</a>   
      <a href='https://explore.panda.org/climate'>WWF on climate crisis</a>
    </div>
    </section>
  )
}


export default HomePage;