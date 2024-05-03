import React from 'react';
import { useHistory } from 'react-router-dom';
import { Carousel, Card, Button } from 'react-bootstrap';
import sl1 from './assets/slide1.png';
import sl2 from './assets/slide2.png';
import sl3 from './assets/slide3.png';
import './Home.css';
import QRGenerator from './components/QR_gen';

function Home() {
    const history = useHistory();

    const redirect_to_roles = () => {
        history.push('/roles');
    };

    const redirect_to_addproducts = () => {
        history.push('/addproducts');
    };

    const redirect_to_supply = () => {
        history.push('/supply');
    };

    const redirect_to_track = () => {
        history.push('/track');
    };

    return (
        <div className="container mt-4">
            <Carousel>
                {/* Dummy carousel items with images */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sl1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sl2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sl3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="bg-light text-dark d-flex justify-content-center align-items-center py-5">
                <div className="container">
                    <h1 className="display-4">Track Your Food with Confidence</h1>
                    <p className="lead">Maintain safety and credibility throughout the supply chain.</p>
                    <p>Learn how we ensure the quality and integrity of your food from farm to table.</p>
                    <a href="#track">
                        <button className="btn btn-lg btn-outline-dark mt-3">Explore Tracking Features</button>
                    </a>
                </div>
            </div>
            {/* Cards for each step */}
            <div className="row mt-4">
                <div className="col-md-12">
                    <Card className="p-4">
                        <Card.Body>
                            <Card.Title>Step 1: Register Food Suppliers, Producers, Distributors, and Retailers</Card.Title>
                            <Button onClick={redirect_to_roles} variant="outline-primary" size="lg">
                                Register
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-12 mt-4">
                    <Card className="p-4">
                        <Card.Body>
                            <Card.Title>Step 2: Place Orders for Food Items</Card.Title>
                            <Button onClick={redirect_to_addproducts} variant="outline-primary" size="lg">
                                Place Order
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-12 mt-4" id="track">
                    <Card className="p-4">
                        <Card.Body>
                            <Card.Title>Step 3: Manage Food Supply Chain</Card.Title>
                            <Button onClick={redirect_to_supply} variant="outline-primary" size="lg">
                                Manage Supply Chain
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-12 mt-4" >
                    <Card className="p-4">
                        <Card.Body>
                            <Card.Title>Track Food Items</Card.Title>
                            <Button onClick={redirect_to_track} variant="outline-primary" size="lg">
                                Track Food Items
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;