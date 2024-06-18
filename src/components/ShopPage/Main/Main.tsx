import React, { FC } from 'react';
import { Container } from 'react-bootstrap';

import './main.scss'
import { Link } from 'react-router-dom';

import ProductList from '../ProductList/ProductList';

const Main: FC = () => {

    return (
        <div className='shop-page__main-block main-block'>
            <Container fluid='lg'>
                <h1 className="main-block__title">Shop</h1>
                <div className="main-block__location"><Link to='/' className='main-block__link link'>Home</Link> -- <Link className='main-block__link link' to='/shop'>Shop</Link></div>
                <ProductList/>
            </Container>
        </div>
    );
};

export default Main;