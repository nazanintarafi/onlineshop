import React from 'react';

const Loader=(props)=>{
    return(
        <div className="Loader">
            <Loader 
                loaded={false} lines={8} length={20} width={10} radius={30}
                corners={1} rotate={0} direction={1} color="#080957" speed={1}
                trail={60} shadow={false} hwaccel={false} className="spinner"
                zIndex={2e9} top="50%" left="50%" scale={1.00}
                loadedClassName="loadedContent" 
            />
            <p>در حال انتقال به درگاه پرداخت</p>
        </div>
    )
}
export default Loader;