import newsImage from "../assets/img/news.png";

function LatestNews() {
  return (
    <div className="latest-news">
      <div className="hero-text">
        <h2>WHAT&#39;S HOT!</h2>
        <h1>
          LATEST<span> NEWS</span>
        </h1>
        <p className="news-section">
          In a nail-biting series that had fans on the edge of their seats, Team
          Spirit emerged victorious against some of the top contenders in the
          tournament. Held in London, the CS2 Major Ascent: The tournament, held
          in London, showcased high- stakes matches and outstanding individual
          performances, cementing Team Spirit&#39;s place as one of the leading
          teams in the CS esports landscape.
        </p>
        <a href="#" className="read-more">
          Read more &nbsp;<i className="fas fa-angle-double-right"></i>
        </a>
      </div>
      <div className="image-container">
        <img src={newsImage} alt="valorant maps" />
      </div>
    </div>
  );
}

export default LatestNews;
