import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './teamblock.scss'
import { Link } from 'react-router-dom';

const TeamBlock: FC = () => {
    return (
        <div className='main-page__team-block team-block'>
            <Container fluid='lg'>
                <h2 className="team-block__title">Dream Team Womazing</h2>
                <Row className='team-block__content content-team-block'>
                    <Col className='content-team-block__slider slider-team-block' xl='9'>
                        <div className="slider-team-block__item">
                            <img src="/img/teamblock-slider/02.jpg" alt="" />
                        </div>
                    </Col>
                    <Col className='content-team-block__info' xl='3'>
                        <div className="content-team-block__title">For each</div>
                        <div className="content-team-block__text">
                            <p>Every girl is unique. However, we are similar in a million little ways.</p>
                            <p>Womazing looks for these little things and creates beautiful things that highlight the advantages of every girl.</p>
                        </div>
                        <Link to="/brand" className="content-team-block__link" >More about the brand</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamBlock;