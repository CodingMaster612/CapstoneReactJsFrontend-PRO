import React, { useState, useEffect } from 'react';
import './CurrencyNews.css'
const CurrencyNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://newsapi.org/v2/everything?q=currency&apiKey=f6dcf2218d304c25b4217400816b4838');
      const data = await response.json();
      setNews(data.articles);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Currency News</h1>
      {news.map(article => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt={article.title} />
        </div>
      ))}
    </div>
  );
};

export default CurrencyNews;