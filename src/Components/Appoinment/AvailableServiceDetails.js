import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';

const AvailableServiceDetails = ({service}) => {
    const{treatment,slots}=service;
    return (
        <div className="card  bg-base-100 shadow-xl text-center">
  <div className="card-body">
    <h2 className=" text-xl uppercase font-md">{treatment}</h2>
    <p>{slots[0]}</p>
    <div className=" justify-start">
      <PrimaryBtn>Get Started</PrimaryBtn>
    </div>
  </div>
</div>
    );
};

export default AvailableServiceDetails;