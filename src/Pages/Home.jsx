import fragBanner from ".././assets/img/hero1.png";
import Connect from "../component/Connect";
import LatestNews from "../component/LatestNews";
import Streams from "../component/Streams";
import Team from "../component/Team";
import VerticalText from "../component/VerticalText";

const heroText = {
  title: "THE ULTIMATE",
  highlight: "ESPORTS",
  highlightSpan: "ARENA",
  description:
    "Whether you're a die-hard fan or a casual viewer, our community is here to elevate your esports experience. Get ready to game on!",
};

function HeroSection({ text, image }) {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h2>{text.title}</h2>
        <h1>
          {text.highlight} <span>{text.highlightSpan}</span>
        </h1>
        <p>{text.description}</p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero" />
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <HeroSection text={heroText} image={fragBanner} />
      <div style={{ marginBottom: '5rem' }}></div>
      <LatestNews />
      <Streams />
      <Team />
      <Connect />
      <VerticalText />
    </>
  );
}

export default Home;
