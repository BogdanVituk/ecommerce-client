import React, { FC, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../types/storeFunc';

import './mainDeviceItem.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { inputsBskDevice } from '../../types/inputs';

import { useGetByIdProductQuery } from '../../services/ProductsService';
import MySpinner from '../../UI/MySpinner/MySpinner';
import { addItem } from '../../store/CartSlice';

const MainDevicePage: FC = () => {

    const { id } = useParams()
    const dispatch = useAppDispatch();

    const nav = useNavigate();

    const { isAuth } = useAppSelector(state => state.UserReducer)

    const { data: productData , isLoading, isError} = useGetByIdProductQuery(id)

    const { register, handleSubmit, reset } = useForm<inputsBskDevice>();

    const onSubmit: SubmitHandler<inputsBskDevice> = (data) => {

        const item = {
            ...data,
            price: productData?.price,
            images: productData?.images,
            id: productData?.id
        }

        dispatch(addItem(item))
        reset()
        nav('/shop')
    }


    return (
        <div className='main-device-page'>
            <Container fluid='lg'>
                <div className="main-device-page__item item-main-device-page">
                    {isLoading && <MySpinner/>}
                    {isError && <h1>Error</h1>}
                    <div className="item-main-device-page__title">{productData?.title}</div>
                    <Row className="item-main-device-page__body">
                        <Col className="item-main-device-page__img" lg='4'>
                            <img src={productData?.images[0]} alt="" />
                        </Col>
                        <Col className="item-main-device-page__info">
                            <div className="item-main-device-page__price">{`$${productData?.price}`}</div>
                            <form onSubmit={handleSubmit(onSubmit)} className="item-main-device-page__form">
                                <div className="item-main-device-page__choose-size choose-size-item">
                                    <div className="choose-size-item__title">Choose a size</div>
                                    <div className='choose-size-item__items'>
                                        <label className='choose-size-item'><input {...register('size')}  name='size' type='radio' value='S' /><span>S</span></label>
                                        <label><input {...register('size')} name='size' value='M' type='radio'/><span>M</span></label>
                                        <label><input {...register('size')} name='size' value='L' type='radio'/><span>L</span></label>
                                        <label><input {...register('size')} name='size' value='XL' type='radio'/><span>XL</span></label>
                                        <label><input {...register('size')} name='size' value='XLL' type='radio'/><span>XLL</span></label>
                                    </div>
                                </div>
                                <div className="item-main-device-page__choose-color choose-color">
                                    <div className="choose-color-item__title">Choose a color</div>
                                    <label className='choose-color_item-select'><input {...register('color')} name='color' value='gray' type='radio'/><div className='gray'></div></label>
                                    <label className='choose-color_item-select'><input {...register('color')} name='color' value='blue' type='radio'/><div className='blue'></div></label>
                                    <label className='choose-color_item-select'><input {...register('color')} name='color' value='pink' type='radio'/><div className='pink'></div></label>
                                    <label className='choose-color_item-select'><input {...register('color')} name='color' value='yellow' type='radio'/><div className='yellow'></div></label>
                                </div>
                                <div className="item-main-device-page__choose-quantity choose-quantity">
                                    <label>Enter quantity:  <input {...register('count')} type="text" /></label>
                                </div>
                                <div>
                                    <button disabled={!isAuth} >Добавить в корзину</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default MainDevicePage;