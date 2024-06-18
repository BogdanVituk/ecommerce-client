import React, { FC } from 'react';

import './collectionsblock.scss'
import MySpinner from '../../../UI/MySpinner/MySpinner';
import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useGetAllProductsQuery } from '../../../services/ProductsService';


const CollectionsBlock: FC = () => {


    const { data, isError, isLoading } = useGetAllProductsQuery();

    const navigate = useNavigate();

    return (
        <div className='main-page__collections-block collections-block'>
            <Container fluid='lg'>
                <h2 className="collections-block__title">New collection</h2>
                {isError && <h2>Аn error occurred</h2>}
                {
                    isLoading ?
                    <MySpinner/>
                    :
                    <Row className="collections-block__items">
                        {
                            data?.map((item, index) => {
                                if( index < 4 ) {
                                    return <Col onClick={() => navigate(`/devicePage/${item.id}`)} key={item.id} className='collections-block__item item-collections-block'>
                                        <div className="item-collections-block__img"><img src={item.images[0]} alt=""  /></div>
                                        <div className="item-collections-block__title">{item.title}</div>
                                        <div className="item-collections-block__price">{item.price + '$'}</div>
                                        </Col>
                                }
                            })
                        }
                    </Row>
                }
                <div className="collections-block__btn"><Link to="/shop">Open shop</Link></div>
            </Container>
        </div>
    );
};

export default CollectionsBlock;