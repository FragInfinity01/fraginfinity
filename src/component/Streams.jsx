import fl from '.././assets/img/fl.png'
import val from '.././assets/img/val.png'
import brawl from '.././assets/img/brawl.png'
import rl from '.././assets/img/rl.png'
import Jumbotron from './Jumbotron'

function Streams() {
  return (
    <div id='streamSection'>
        <Jumbotron/>
    <div className="live-streams-section">
        <div className="streams">
        <a href="https://www.twitch.tv/fraginfinityza/schedule" target="_blank" rel="noopener noreferrer">
        <h2>UPCOMING LIVE STREAMS <i className="fas fa-angle-double-right"></i></h2>
        </a>
            <p>Join us for live esports action every night at 20:00 on Twitch!</p>
            <div className="stream-cards">
                <div className="stream-desc">
                    <img src={fl} alt="hero" />
                    <h3>MONDAY | SUNDAY</h3>
                </div>
                
                <div className="stream-desc">
                    <img src={val} alt="hero" />
                    <h3>TUESDAY | SATURDAY</h3>
                </div>
                
                <div className="stream-desc">
                    <img src={brawl} alt="hero" />
                    <h3>FRIDAY</h3>
                </div>
                
                <div className="stream-desc">
                    <img src={rl} alt="hero" />
                    <h3>THURSDAY</h3>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Streams