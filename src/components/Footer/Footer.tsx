import React from 'react';
import './footer.scss'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='footer' >
            <Container fluid='lg'>
                <Row>
                    <Col className='footer_info info-block-footer'>
                        <div className="info-block-footer__item">© All rights reserved</div>
                        <div className="info-block-footer__item">Privacy Policy</div>
                        <div className="info-block-footer__item">Public offer</div>
                    </Col>
                    <Col className='footer_nav nav-footer'>
                        <div className="nav-footer_tel">+38 (096) 823-54-12</div>
                        <div className="nav-footer_email">hello@womazing.com</div>
                        <Row className="nav-footer_group-icons group-icons-nav">
                            <Col className="group-icons-nav">
                                <img src="/img/footer/01.svg" alt="" />
                            </Col>
                            <Col className="group-icons-nav"> <img src="/img/footer/02.svg" alt="" /> </Col>
                            <Col className="group-icons-nav"> <img src="/img/footer/03.svg" alt="" /> </Col>
                        </Row>
                        <div className="nav-footer__card"><img src="/img/footer/visa-mastercard.svg" alt="" /></div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;