import React, { FC } from 'react';

import { useGetAllProductsQuery } from '../../../services/ProductsService';

import MySpinner from '../../../UI/MySpinner/MySpinner';
import ProductItem from '../../ProductItem/ProductItem';

const ProductList: FC = () => {


    const { data, isError, isLoading } = useGetAllProductsQuery();

    return (
        <>
            <div className="main-block__count-items">Shown {data?.length} goods</div>
            <div className="main-block__items">
                {isError && <h1>Щось сталось не те</h1>}

                {
                    isLoading ?
                    <MySpinner/>
                    :            
                    data?.map((item, index) => {  
                        return <ProductItem key={item.id} item={item}/>                
                    })
                    
                }
            </div>
        </>
    );
};

export default ProductList;