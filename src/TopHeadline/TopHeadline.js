import React, { useEffect, useState } from 'react';
import News from '../components/News/News';

const TopHeadline = () => {

    const [articles, setNews] = useState([]);

    useEffect(() =>{
        fetch(`http://newsapi.org/v2/everything?q=tesla&from=2021-02-02&sortBy=publishedAt&apiKey=db836f720dc94c7b9970e122b57e1264`)
        .then(res => res.json())
        .then(data => setNews(data.articles))
    }, [])

    return (
        <div>
            <h1>Total News: {articles.length}</h1>
            
            {
                articles.map(article => <News article={article}></News>)
            }

        </div>
    );
};

export default TopHeadline;