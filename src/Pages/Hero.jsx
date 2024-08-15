import fragBanner from '.././assets/img/Asset 24.png'

function Hero() {
  return (
    <div className="hero-section">
        <div className="hero-text">
            <h2>The Ultimate</h2>
    <h1>ESPORTS <span>ARENA</span></h1>
<p>Whether you&#39;re a die-hard fan or a casual viewer, our community is here to elevate your esports experience. Get ready to game on!</p>
        </div>
    <div className="hero-img">
        <img src={fragBanner} alt="hero" />
    </div>
    </div>
  )
}

export default Hero