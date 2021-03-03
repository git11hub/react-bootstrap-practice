import React from 'react';
import { Button, Card } from 'react-bootstrap';

const News = (props) => {
    const {description, title, urlToImage} = props.article;
    return (        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>        
    );
};

export default News;