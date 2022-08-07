import React from 'react';

const AvailableServiceDetails = ({service}) => {
    const{treatment,slots}=service;
    return (
        <div className="card  bg-base-100 shadow-xl text-center">
  <div className="card-body">
    <h2 className=" text-xl uppercase font-md ">{treatment}</h2>
    <p>{
       slots.length?<span>{slots[0]}</span>:<span className='text-red-500'>Try another day</span>    
     }</p>
    <p>{slots.length} {slots.length>1?"spaces":"space"} available</p>
    <div className=" justify-start">
     <button className='btn  text-white bg-gradient-to-r from-primary to-secondary border-orange-50' disabled={slots.length===0}>Book Appinment</button>
    </div>
  </div>
</div>
    );
};

export default AvailableServiceDetails;