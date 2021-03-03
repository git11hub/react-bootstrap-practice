import logo from './logo.svg';
import './App.css';
import News from './components/News/News'
import Header from './Header/Header';
import TopHeadline from './TopHeadline/TopHeadline';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
      <Header></Header>
        <Col>          
          <TopHeadline></TopHeadline>
        </Col>
        <Col>          
          <TopHeadline></TopHeadline>
        </Col>
        <Col>          
          <TopHeadline></TopHeadline>
        </Col>        
      </Row>
    </Container>
  );
}

export default App;
