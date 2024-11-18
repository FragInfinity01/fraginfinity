import React from 'react';
import bannerLogo from ".././assets/img/bannerLogo.png";
import Twitch from '.././assets/img/Twitch.png'
import Discord from '.././assets/img/Discord.png'
import TwitterX from '.././assets/img/TwitterX.png'
import TikTok from '.././assets/img/TikTok.png'
import YouTube from '.././assets/img/YouTube.png'
import Instagram from '.././assets/img/Instagram.png'

export default function ComingSoonPage() {
  return (
    <div className='coming-soon'>
        <div className="cta">
            <span>CHECK OUT OUR LATEST YOUTUBE VIDEO</span>
            <a href='' className="read-more">Watch Video &nbsp;<i className="fas fa-angle-double-right"></i></a>
        </div>
        <h3>WEBSITE</h3>
      <h1>COMING SOON</h1>
      {/* <p>Our website is under development and will be live soon. Stay tuned!</p> */}
      <img src={bannerLogo} className="logo" alt="FragInfinity banner logo" />
      <div className="social-links">
                <a href="https://www.instagram.com/fraginfinityza/" target="_blank"><img src={Instagram} alt="instagram logo" /></a>
                <a href="https://www.twitch.tv/fraginfinityza" target="_blank"><img src={Twitch} alt="twitch logo" /></a>
                <a href="https://discord.gg/C3kwUSJ4j7" target="_blank"><img src={Discord} alt="discord logo" /></a>
                <a href="https://twitter.com/FRAGINFINITYZA/" target="_blank"><img src={TwitterX} alt="x logo" /></a>
                <a href="https://www.tiktok.com/@fraginfinity8" target="_blank"><img src={TikTok} alt="tiktok logo" /></a>
                <a href="https://www.youtube.com/@FRAGINFINITY" target="_blank"><img src={YouTube} alt="youtube logo" /></a>
            </div>
    </div>
  );
}