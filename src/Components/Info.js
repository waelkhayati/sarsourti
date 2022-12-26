import React from 'react';
import thumbnail from '../Assets/TBS.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Info({info}) {
    return (
        
        <React.Fragment>
            <Col>
                <Container style={{margin: '2rem 0'}}>
                    <Card className="article-style" >
                        <div className="card-img-top">
                            <img src={thumbnail} alt="" className="img-fluid article-img"/>
                        </div>
                        <div className="card-body">
                            <Row>
                                <Col>
                                    <h2><a href="">{info.title}</a></h2>
                                </Col>
                                <Col lg={1} md={2} sm={3} xs={9}>
                                    <p>{info.date}</p>
                                </Col>
                            </Row>
                            <Row>
                                <p>{info.description}</p>
                            </Row>
                            <Row>
                                <span><a href="">Read More</a></span>
                            </Row>
                        </div>       
                    </Card>
                </Container>
            </Col>
        
            </React.Fragment>
    );
}

export default Info;