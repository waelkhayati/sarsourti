import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ArticleList from './Components/ArticleList';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
  
  <>
      <Header/>

      <Container>
        <Row>
          <ArticleList/>
        </Row>     
      </Container>

      <Footer/>
    </>

/*
  <Register/>
*/
/*
  <Login/>   
*/
 
  );
}

export default App;
