import player1 from '.././assets/img/player.png'
import valo from '.././assets/img/valorant.png'
import farlight from '.././assets/img/farlight.png'
import rocket from '.././assets/img/rocket.png'
import brawl from '.././assets/img/brawlhalla.png'
import Twitch from '.././assets/img/Twitch.png'
import Discord from '.././assets/img/Discord.png'
import TwitterX from '.././assets/img/TwitterX.png'
import TikTok from '.././assets/img/TikTok.png'
import YouTube from '.././assets/img/YouTube.png'

function Team() {
  return (
    <section className="team-section" id="teamSection">
        <h1>MEET OUR <span>TEAM</span></h1>
        <div className="team-cards">
            <div className="player-card">
                <div className="image-box">
                <img src={player1} alt="hero" />
                </div>
                <div className="player-description">
                    <div className="games">
                    <img src={valo} alt="hero" />
                    <img src={farlight} alt="hero" />
                    <img src={rocket} alt="hero" />
                    <img src={brawl} alt="hero" />
                    </div>
                    <p className="desc">
                    Kernel 32 is a dynamic esports player known for his prowess in Valorant, Farlight 84, Rocket League, and Brawlhalla, consistently delivering standout performances and strategic brilliance. He is also the founder of FragInfinity, where his leadership and passion for gaming continue to inspire and drive the esports community forward.
                    </p>
                    <div className="social-links">
                    <img src={Twitch} alt="hero" />
                    <img src={Discord} alt="hero" />
                    <img src={TwitterX} alt="hero" />
                    <img src={TikTok} alt="hero" />
                    <img src={YouTube} alt="hero" />
                    </div>
                </div>
            </div>

            <div className="player-card">
            <div className="image-box">
                <img src={player1} alt="hero" />
                </div>
                <div className="player-description">
                    <div className="games">
                    <img src={valo} alt="hero" />
                    <img src={farlight} alt="hero" />
                    <img src={rocket} alt="hero" />
                    <img src={brawl} alt="hero" />
                    </div>
                    <p className="desc">
                    Coolgyal is an exceptional esports player excelling in Valorant, Farlight 84 and Brawlhalla, known for her strategic gameplay and impressive skills. As the founder of FragInfinity, she not only showcases her talent across multiple games but also leads and inspires the esports community through her innovative vision and dedication.
                    </p>
                    <div className="social-links">
                    <img src={Twitch} alt="hero" />
                    <img src={Discord} alt="hero" />
                    <img src={TwitterX} alt="hero" />
                    <img src={TikTok} alt="hero" />
                    <img src={YouTube} alt="hero" />
                    </div>
                </div>
            </div>

            <div className="player-card">
            <div className="image-box">
                <img src={player1} alt="hero" />
                </div>
                <div className="player-description">
                    <div className="games">
                    <img src={valo} alt="hero" />
                    <img src={farlight} alt="hero" />
                    <img src={rocket} alt="hero" />
                    <img src={brawl} alt="hero" />
                    </div>
                    <p className="desc">
                    Meet REVENVNT, a passionate gamer who dives into Valorant, Farlight 84, Rocket League, and Brawlhalla with a competitive spirit. Known also as the founder of FragInfinity, he&#39;s built a community around his love for gaming, fostering camaraderie and skill development among players. Whether strategizing in tactical shooters or navigating high-octane car soccer.
                    </p>
                    <div className="social-links">
                    <img src={Twitch} alt="hero" />
                    <img src={Discord} alt="hero" />
                    <img src={TwitterX} alt="hero" />
                    <img src={TikTok} alt="hero" />
                    <img src={YouTube} alt="hero" />
                    </div>
                </div>
            </div>

            <div className="player-card">
            <div className="image-box">
                <img src={player1} alt="hero" />
                </div>
                <div className="player-description">
                    <div className="games">
                    <img src={valo} alt="hero" />
                    <img src={farlight} alt="hero" />
                    <img src={rocket} alt="hero" />
                    <img src={brawl} alt="hero" />
                    </div>
                    <p className="desc">
                    A versatile gamer who thrives in Valorant, Farlight 84, Rocket League, and Brawlhalla. With a knack for competitive gaming, BlackNoise navigates each title with skill and enthusiasm, bringing a strategic edge to the virtual battlefield. Whether honing precise aim in FPS matches or mastering the art of teamwork in fast-paced sports games.
                    </p>
                    <div className="social-links">
                        <a href="https://www.twitch.tv/blacknoisettv" target="_blank"><img src={Twitch} alt="twitch logo" /></a>
                        <a href="https://www.instagram.com/steve_art16/" target="_blank"><img src={Discord} alt="discord logo" /></a>
                        <a href="https://www.instagram.com/steve_art16/" target="_blank"><img src={TwitterX} alt="x logo" /></a>
                        <a href="https://www.instagram.com/steve_art16/" target="_blank"><img src={TikTok} alt="tiktok logo" /></a>
                        <a href="http://www.youtube.com/@stevemolele6902" target="_blank"><img src={YouTube} alt="youtube logo" /></a>
                    </div>
                </div>
            </div>

            <div className="player-card">
            <div className="image-box">
                <img src={player1} alt="hero" />
                </div>
                <div className="player-description">
                    <div className="games">
                    <img src={valo} alt="hero" />
                    <img src={farlight} alt="hero" />
                    <img src={rocket} alt="hero" />
                    <img src={brawl} alt="hero" />
                    </div>
                    <p className="desc">
                    Meet MBQ, a dedicated gamer who immerses themselves in the world of Farlight 84. Known for their strategic prowess and keen reflexes, MBQ navigates the futuristic battlegrounds with finesse and determination. Whether crafting intricate strategies or engaging in intense firefights.
                    </p>
                    <div className="social-links">
                    <img src={Twitch} alt="hero" />
                    <img src={Discord} alt="hero" />
                    <img src={TwitterX} alt="hero" />
                    <img src={TikTok} alt="hero" />
                    <img src={YouTube} alt="hero" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team