import React, { FC } from 'react';
import { IProductItem } from '../../types/IProductItems';
import { useNavigate } from 'react-router-dom';

interface ProductItemProps {
    item: IProductItem 
}

const ProductItem: FC<ProductItemProps> = ({ item }) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/devicePage/${item.id}`)} key={item.id} className='main-block__item item-main-block'>
            <div className="item-main-block__img"><img src={item.images[0]} alt=""  /></div>
            <div className="item-main-block__title">{item.title}</div>
            <div className="item-main-block__price">{item.price + '$'}</div>
        </div>
    );
};

export default ProductItem;