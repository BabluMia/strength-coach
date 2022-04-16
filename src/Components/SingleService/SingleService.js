import React from 'react';

const SingleService = ({service}) => {
    const {quality,price,desc,img} = service
    return (
        <div className='col-12 col-md-3 text-center shadow py-3 px-2' style={{border:"1px solid black"}}>
            <img src={img} className='img-fluid rounded' alt="" />
            <h5>{quality}</h5>
            <p>{desc}</p>
            <h5>{price}</h5>
        </div>
    );
};

export default SingleService;