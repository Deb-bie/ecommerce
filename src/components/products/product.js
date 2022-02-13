import React from 'react';
import IndividualProduct from './individualProduct';



const Product = ({productss}) => {
    console.log(productss);
    return (
        <>
            {productss.map((productsss) => (
                <IndividualProduct productssss={productsss} />
            ))}

            vibe
        </>
    )
};


export default Product;




