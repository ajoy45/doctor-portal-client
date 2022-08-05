import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 mb-5 px-12 text-white">
            <div className="card card-side shadow-xl bg-gradient-to-r from-secondary to-primary  mr-2">
                <figure ><img  className='w-7 ml-4' src={clock} alt="clock"/></figure>
                <div className="card-body p-8">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                   
                </div>
            </div>
            <div className="card card-side bg-accent shadow-xl  mr-2">
                <figure><img className='w-7 ml-4' src={location} alt="location"/></figure>
                <div className="card-body p-8">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                  
                </div>
            </div>
            <div className="card card-side bg-gradient-to-r from-secondary to-primary shadow-xl ">
            <figure><img  className='w-7 ml-7' src={phone} alt="phone"/></figure>
                <div className="card-body p-8 ">
                    <h2 className="card-title ">Contact us now</h2>
                    <p>+000 123 456789</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Info;