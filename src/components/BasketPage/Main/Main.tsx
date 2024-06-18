import React, { FC, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './mainBasketPage.scss'

import { useAppDispatch } from '../../../types/storeFunc';
import { useAppSelector } from '../../../types/storeFunc';
import { toggleVisRegModal, toggleVisSuncModal } from '../../../store/ModalsSlice';
import { clearCart, removeItem } from '../../../store/CartSlice';

import { Link } from 'react-router-dom';

const Main: FC = () => {

    const dispatch = useAppDispatch();

    const { user, isAuth } = useAppSelector(state => state.UserReducer)
    const { items, totalPrice } = useAppSelector(state => state.cartSlice)

    const openHandler = () => {
        dispatch(toggleVisRegModal())
    }

    if(!isAuth) {
        return (
            <Container fluid='lg'>
                <div className="main-block-basket-page__title">Cart</div>
                <div className="main-block-basket-page__location"><Link to='/'><span>Home</span></Link> --- Cart</div>
                <h2 className='main-block-basket-page__link-login' onClick={openHandler} >First, log in to your account</h2>
            </Container>
        )
    }

    const clickHandler = () => {
        dispatch(toggleVisSuncModal())
        dispatch(clearCart())
    }

    const deleteHandler = (id: number) => {
        dispatch(removeItem(id))
    } 

    return (
        <div className='main-block-basket-page'>
            <Container fluid='lg'>
                <div className="main-block-basket-page__title">Cart</div>
                <div className="main-block-basket-page__location">Home --- Cart</div>
                {
                    items.length ? 
                    <>
                    <div className="main-block-basket-page__body">
                        <Row className='main-block-basket-page__items'>
                            <Col className='main-block-basket-page__item' lg='6'>Товар</Col>
                            <Col className='main-block-basket-page__item' lg='2'>Цена</Col>
                            <Col className='main-block-basket-page__item' lg='2'>Количество</Col>
                        </Row>



                        <Row className='main-block-basket-page__goods'>
                            {
                                items.map(item => {
                                    return <>
                                            <Col className='main-block-basket-page__item' lg='6'><img width={50} height={50} src={item?.images[0]} alt="" /></Col>
                                            <Col className='main-block-basket-page__item' lg='2'>{item.price}$</Col>
                                            <Col className='main-block-basket-page__item' lg='2'>{item.count}</Col>
                                            <Col onClick={() => deleteHandler(item.id)} className='main-block-basket-page__item' lg='2'>Удалить</Col>
                                        </>
                                })
                            }
                            <div>Всего: {totalPrice}$</div>
                        </Row>
                    </div>
                         <div className='my-button'><a href='#' className='main-block-basket-page__button' onClick={() => clickHandler()}>Сделать заказ</a></div>
                    </>
                    

                    : <Link to='/shop'>Упс... корзина пуста перейдіть до магазина щоб додати товар </Link>
                }
               
            </Container>
        </div>
    );
};

export default Main;