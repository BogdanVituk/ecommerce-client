import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './impotantBlock.scss'


const ImpotantBlock = () => {
    return (
        <div className='main-page__impotant-block impotant-block'>
            <Container fluid='lg'>
             <div className="impotant-block__title">What is important to us</div>
             <Row className='impotant-block__items'>
                <Col xl='4' lg='4' md='6' sm='12' className='impotant-block__item item-impot-block'>
                    <div className="item-impot-block__img"><img src="/img/impotant/01.svg" alt="" /></div>
                    <div className="item-impot-block__title">Quality</div>
                    <div className="item-impot-block__text">Our professionals use the best equipment to sew clothes of unprecedented quality</div>
                </Col>
                <Col xl='4' lg='4' md='6' sm='12' className='impotant-block__item item-impot-block'>
                    <div className="item-impot-block__img"> <img width='61px' height='61px' src="/img/impotant/02.svg" alt="" /> </div>
                    <div className="item-impot-block__title">Speed</div>
                    <div className="item-impot-block__text">Thanks to the well-functioning system in Womazing, we can sew up to 20 units of products in our own workshops</div>
                </Col>
                <Col xl='4' lg='4' md='12' sm='12' className='impotant-block__item item-impot-block'>
                    <div className="item-impot-block__img"><img width='61px' height='61px' src="/img/impotant/03.svg" alt="" /></div>
                    <div className="item-impot-block__title">Responsibility</div>
                    <div className="item-impot-block__text">We care about people and the planet. Waste-free production and comfortable working conditions - all this is Womazing</div>
                </Col>
             </Row>
            </Container>
        </div>
    );
};

export default ImpotantBlock;