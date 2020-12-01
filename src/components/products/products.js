import React from 'react';
import Product from './product/product';
const Products=(props)=>{

    return(
        props.productsList.map((product,index)=>
            <Product
                key={index}
                image={product.image}
                percent={product.percent}
                id={product.id}
                name={product.name}
                model={product.model}
                price={product.price}
                previousPrice={product.previousPrice}
            />
        )
    )
}
export default Products;