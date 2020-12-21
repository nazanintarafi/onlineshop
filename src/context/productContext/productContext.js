import React, {useState} from 'react';

export const ProductContext = React.createContext();
const ProductContextProvider=(props)=>{
    const[variety,setVariety]=useState(false);
    const[color,setColor]=useState(false);
    const[warranty,setWarranty]=useState(false);
    const[price,setPrice]=useState(false);
    

    const ShowWarranty=()=>{
        setWarranty(!warranty);
    }

    const ShowVariety=()=>{
        setVariety(!variety);
    }

    const ShowColor=()=>{
        setColor(!color);
    } 

    const HidePrice=()=>{
        setPrice(!price)
    }




    return(
        <ProductContext.Provider value={{HidePrice , price , variety,ShowVariety,color,ShowColor,warranty,ShowWarranty}}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;