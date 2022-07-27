import React from 'react'
import './Slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'


export default class Sliders extends React.Component {
    render() {
        return (
            <div className="my-5">
                <Carousel>
                    <Carousel.Item>
                        <img 
                            id='pic'
                            className="img-fluid d-block w-100 img-respnsive"
                            src="img/Slider1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            id="pic"
                            className="img-fluid d-block w-100 img-respnsive "
                            src="img/Slider2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            id='pic'
                            className="img-fluid d-block w-100 img-respnsive"
                            src="img/Slider3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

        );
    }
}