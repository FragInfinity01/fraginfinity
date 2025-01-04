import { useState } from 'react';
import Twitch from '.././assets/img/Twitch.png'
import Discord from '.././assets/img/Discord.png'
import TwitterX from '.././assets/img/TwitterX.png'
import TikTok from '.././assets/img/TikTok.png'
import YouTube from '.././assets/img/YouTube.png'
import Instagram from '.././assets/img/Instagram.png'

function Connect() {
    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    console.dir(e);
    e.preventDefault();
    if (email) {
      setEmail('');
    }
  };

  return (
    <div id="connectSection" className='connect-section'>
        <div className="connect-info">
            <div className="connect">
                <h2>LET&#39;S CONNECT</h2>
                <h1>EXPLORE WITH <span>FRAGINFINITY</span></h1>
                <p>
                We&#39;re passionate about connecting with fellow gamers and teams who share our enthusiasm for esports. Whether you&#39;re interested in live sharing, friendly competitions, or exploring partnership opportunities, let&#39;s connect!
                </p>
                <h4>Subscribe to see the latest from FRAGINFINITY</h4>
            </div>
            <form action= "https://formspree.io/f/xkgwykgn" onSubmit={handleSubmit} className="newsletter-form" method='POST'>
                <input
                    type="email"
                    placeholder="Enter your email here..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">CONNECT &nbsp;<i className="fas fa-angle-double-right"></i></button>
            </form>
            <div className="social-links">
                <a href="https://www.instagram.com/fraginfinityza/" target="_blank"><img src={Instagram} alt="instagram logo" /></a>
                <a href="https://www.twitch.tv/fraginfinityza" target="_blank"><img src={Twitch} alt="twitch logo" /></a>
                <a href="https://discord.gg/C3kwUSJ4j7" target="_blank"><img src={Discord} alt="discord logo" /></a>
                <a href="https://twitter.com/FRAGINFINITYZA/" target="_blank"><img src={TwitterX} alt="x logo" /></a>
                <a href="https://www.tiktok.com/@fraginfinity8" target="_blank"><img src={TikTok} alt="tiktok logo" /></a>
                <a href="https://www.youtube.com/@FRAGINFINITY" target="_blank"><img src={YouTube} alt="youtube logo" /></a>
            </div>
        </div>
    </div>
  )
}

export default Connect