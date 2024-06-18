import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './main.scss';

import { Link } from 'react-router-dom';

const Main: FC = () => {

    return (
        <div className='main-page__main-block main-block'>
            <Container className='main-block__container' fluid='lg'>
                <Row className='main-block__body' >
                    <Col sm='12' md='6' lg='6' className='main-block__item main-block__item-header item-main'>
                       <div className="item-main_slide">
                            <div className="item-main_title">New arrivals this season</div>
                            <div className="item-main_text text-center">Sophisticated combinations and velvety shades are what you've been looking for this season. Time to explore.</div>
                            <div className="item-main_btn">
                                <Link to='/shop'>Open shop</Link>
                            </div>
                            
                       </div>
                       {/* <div className="item-main_slide">
                            <div className="item-main_title">Что-то новенькое. Мы заждались тебя.</div>
                            <div className="item-main_text">Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!</div>
                            <a href='#' className="item-main_btn">Открыть магазин</a>
                       </div> 
                        <div className="item-main_slide">
                            <div className="item-main_title">Включай новый сезон с WOMAZING</div>
                            <div className="item-main_text">Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</div>
                            <a href='#' className="item-main_btn">Открыть магазин</a>
                       </div> */}
                    </Col>
                    <Col  md='6' lg='6' className='main-block_items items-images'>
                            <div className="items-images_item items-images_one">
                                <img src="/img/main/01.jpg" alt="" />
                            </div>
                            <div className="itemss-images_item items-images_too">
                                <img src="/img/main/02.jpg" alt="" />
                            </div>
                            <div className="items-images_item items-images_sree">
                                <img src="/img/main/03.jpg" alt="" />
                            </div>
                 
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;