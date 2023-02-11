import React from 'react';
import './Blog.css'
const Blog = () => {
  const posts = [
    {
      title: 'Understanding the Foreign Exchange Market',
      date: 'January 1, 2021',
      content: `The foreign exchange market, also known as forex or FX, is the largest financial market in the world. It allows individuals, companies, and financial institutions to trade currencies with each other. In this blog post, we'll take a closer look at the basics of the foreign exchange market and how it works.`
    },
    {
      title: 'How to Hedge Your Currency Risk',
      date: 'February 15, 2021',
      content: `Hedging is a risk management strategy that helps protect against potential losses. In the context of currency trading, it involves taking steps to offset the risk associated with currency fluctuations. In this blog post, we'll explore the different ways you can hedge your currency risk and what you need to know to get started.`
    },
    {
      title: 'The Impact of Interest Rates on Currency Exchange Rates',
      date: 'March 31, 2021',
      content: `Interest rates play a significant role in the world of currency exchange. They can have a direct impact on exchange rates, causing them to rise or fall depending on the situation. In this blog post, we'll delve into the relationship between interest rates and currency exchange rates and what it means for traders and investors.`
    }
  ];

  return (
    <div className="Blog">
      <h1>Blog</h1>
      {posts.map(post => (
        <div key={post.title}>
          <h2>{post.title}</h2>
          <p><em>{post.date}</em></p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;