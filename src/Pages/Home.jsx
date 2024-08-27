import fragBanner from '.././assets/img/Asset 24.png'
import Connect from '../component/Connect'
import LatestNews from '../component/LatestNews'
import Streams from '../component/Streams'
import Team from '../component/Team'
import VerticalText from '../component/VerticalText'

function Home() {
  return (
    <>
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
    <LatestNews />
    <Streams />
    <Team />
    <Connect />
    <VerticalText />
    </>
  )
}

export default Home