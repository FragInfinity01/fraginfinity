function LatestNews() {
  return (
    <section className="latest-news">
      <div className="hero-text">
        <h2>What's HOT!</h2>
        <h1>Latest<span> News</span></h1>
        <p className="news-section">
          In a nail-biting series that had fans on the edge of their seats, 
          Team Spirit emerged victorious against some of the top 
          contenders in the tournament. Held in London, the CS2 Major 
          Ascent: The tournament, held in London, showcased high-
          stakes matches and outstanding individual performances, 
          cementing Team Spirit's place as one of the leading teams in 
          the CS esports landscape.
        </p>
        <a href="#" className="read-more">Read more</a>
      </div>
      <div className="image-container">
        <img src="./img/news.png" alt="valorant maps" />
      </div>
    </section>
  );
}

export default LatestNews;
