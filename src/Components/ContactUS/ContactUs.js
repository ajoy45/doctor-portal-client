
import React from 'react';
import { Rotate } from 'react-reveal';
import appoinment from '../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <section style={
            { background: `url(${appoinment})` }

        } className="mt-6 pb-20 ">
            <Rotate top left>
            <div className='text-center'>
                <h4 className='text-primary text-xl font-bold pt-10'>Contact Us</h4>
                <h1 className='text-white text-3xl pb-6'>Stay Contact With Us</h1>
               
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto ">
                    <div className="card-body">
                        <div className="form-control">
                           
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                           
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                           
                            <input type="text" placeholder=" your Message" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
            </Rotate>
            
        </section>
    );
};

export default ContactUs;