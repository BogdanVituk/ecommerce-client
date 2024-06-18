import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import MyButton from '../../UI/MyButton/MyButton';
import './mainBrand.scss';
import { Link } from 'react-router-dom';

const MainBrand: FC = () => {
    return (
        <div className='brand-page__main main-brand-page'>
           <Container fluid='lg'>
              <div className="main-brand-page__header">
                <div className="main-brand-page__title">About the brand</div>
                <div className="main-brand-page__location"><Link to='/' className='main-brand-page__link link'>Home</Link> -- <Link className='main-brand-page__link link' to='/brand'>About the brand</Link></div>
              </div>
              <div className="main-brand-page__content content-main-brand">
                <Row>
                        <Col lg='4'>                    
                            <img className="item-main-brand__img px-0" src="/img/brand/01.jpg" alt="" />                    
                        </Col>
                        <Col >
                            <div className="items-content-main-brand__item item-main-brand">
                                <div className="item-main-brand__title">Idea and woman</div>
                                <div className="item-main-brand__text"> 
                                    <p>Womazing was founded in 2010 and has become one of the most successful companies in our country. Like many Italian firms, Womazing remains a family company, although none of the family members are fashion designers.</p> 
                                    <p>We follow a successful formula, using the services of famous fashion designers to create our collections. This method has been described by fashion critic Colin McDowell as a form of designer co-creation characteristic of a number of Italian prêt-a-porter companies.</p> 
                                </div>
                            </div>  
                        </Col>
                </Row>
                <Row>
                        <Col className='pr-[123px] pl-0 py-[77px]'> 
                            <div className="item-content-main-brand__title">The magic is in the details</div>
                            <div className="item-content-main-brand__text">
                                <p>The first Womazing store was opened in a small town in the north of the country in 2010. The first collection consisted of two coats and a suit, which were copies of Parisian models.</p>
                                <p>Despite the fact that the founder was a lawyer by training, her family was always closely connected with sewing (the founder’s great-grandmother sewed clothes for women, and her mother founded a professional school of cutting and sewing). The desire to produce clothes for the masses held great promise, especially at a time when high fashion still dominated and the market for quality prêt-a-porter simply did not exist.</p>
                            </div>
                        </Col>
                        <Col className='px-0' lg='4'>
                            <img src="/img/brand/02.jpg" alt="" />
                        </Col>
                </Row>
                <MyButton>Go to the store</MyButton>
              </div>
            </Container>     
        </div>
    );
};

export default MainBrand;