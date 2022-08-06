import React from 'react';

const Services = ({ img, title, description }) => {
    return (

        <div class="card  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{title}</h2>
          <p>{description}</p>
          
        </div>
      </div>
            
        
    );
};

export default Services;