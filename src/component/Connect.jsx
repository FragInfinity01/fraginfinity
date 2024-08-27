import { useState } from 'react';
import Twitch from '.././assets/img/Twitch.png'
import Discord from '.././assets/img/Discord.png'
import TwitterX from '.././assets/img/TwitterX.png'
import TikTok from '.././assets/img/TikTok.png'
import YouTube from '.././assets/img/YouTube.png'

function Connect() {
    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Email submitted: ${email}`);
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
            <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                    type="email"
                    placeholder="Enter your email here..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Connect &nbsp;<i className="fas fa-angle-double-right"></i></button>
            </form>
            <div className="social-links">
                <img src={Twitch} alt="hero" />
                <img src={Discord} alt="hero" />
                <img src={TwitterX} alt="hero" />
                <img src={TikTok} alt="hero" />
                <img src={YouTube} alt="hero" />
            </div>
        </div>
    </div>
  )
}

export default Connect