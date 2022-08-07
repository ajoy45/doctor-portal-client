import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableServiceDetails from './AvailableServiceDetails';

const AvailabeService = ({date}) => {
    const[services,setServices]=useState([]);
    console.log(services)
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <section>
           <h1 className='text-primary text-xl font-bold text-center p-8'>Available Service on {format(date, 'PP')}</h1> 
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-14'>
            {
                services.map(service=><AvailableServiceDetails
                keys={service._id}
                service={service}
                ></AvailableServiceDetails>)
            }
           </div>
        </section>
    );
};

export default AvailabeService;