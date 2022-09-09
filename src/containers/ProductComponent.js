import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductComponent() {

    const products = useSelector((state) => state.allProducts.products)

    const rederList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (
            <div className='four wide column' key={id}
                style={{
                    width: "30vw",
                }}>
                <Link to={`/product/${id}`}>
                    <div className='ui link cards'>
                        <div className='card' style={{ height: "40vw" }}>
                            <div className='image'>
                                <img src={image} alt={title} />
                            </div>
                            <div className='content'>
                                <div className='header'>{title}</div>
                                <div className='meta price'>$ {price}</div>
                                <div className='meta'>{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div >)
    })

    return (
        <>
            {rederList}
        </>
    )
}

export default ProductComponent