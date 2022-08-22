import React from 'react';
import Tada from 'react-reveal/Tada';
const Services = ({ img, title, description }) => {
  return (
    <Tada>
           <div className="card  bg-base-100 shadow-xl" >
      <figure className="px-10 pt-10" >
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure >
      <div className="card-body items-center text-center" >
        <h2 className="card-title" > {title}</h2 >
        <p>{description}</p>

      </div >
    </div >
    </Tada>
    


  );
};

export default Services;