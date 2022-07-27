import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default class Cards extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                      <Col >
                        <Card style={{  }}>
                            <Card.Img variant="top" src={this.props.img}/>
                            <Card.Body>
                                <Card.Title> {this.props.head} </Card.Title>
                                <Card.Text>{this.props.data}</Card.Text>
                                <Button variant="outline-primary" href={this.props.tolink}>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>  
                </Row>
            </Container>
        );
    }

}
