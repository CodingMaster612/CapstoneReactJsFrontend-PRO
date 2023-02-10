import React, { useState, useEffect } from 'react';
import './CryptoNews.css';
const CryptoNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=f6dcf2218d304c25b4217400816b4838`)
      .then(response => response.json())
      .then(data => {
        setNews(data.articles);
        setLoading(false);
      });
  }, []);

  return (
    <header style={HeaderStyle}>
    <div className="CryptoNews">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {news.map(article => (
            <li key={article.title}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <img src={article.urlToImage} alt={article.title} />
            </li>
            
          ))}
        </ul>
      )}
    </div>
    </header>
  );
};
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    // background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "white"
}

export default CryptoNews;
