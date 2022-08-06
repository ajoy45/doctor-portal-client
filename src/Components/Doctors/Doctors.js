import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import appoinment from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';
const Doctors = () => {
    return (
        <section style={{ 
            background: `url(${appoinment})` 
          }} className='grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center  mb-12 mt-56'>
            <div>
               <img className='mt-[-100px]' src={doctor} alt="appoinment" />
            </div>
            <div className='px-12'>
               <h3 className='text-primary text-xl py-3'>Appointment</h3>
               <h1 className='text-white pb-3 text-3xl'>Make an appointment Today</h1>
               <p className='text-white pb-3 text-sm w-50'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
               <PrimaryBtn>GET STARTED</PrimaryBtn>
            </div>
        </section>
    );
};

export default Doctors;