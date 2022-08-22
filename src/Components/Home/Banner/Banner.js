import React from 'react';
import { Rotate } from 'react-reveal';
import chair from '../../../assets/images/chair.png'
import PrimaryBtn from '../../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <Rotate top left>
            <section className='bg-nature-light dark:bg-nature-dark bg-cover object-cover bg-center w-full'>
                <div className="hero min-h-screen  ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img style={{ width: 594 }} src={chair} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                        <div style={{ width: 650 }}>
                            <h1 className="text-5xl font-bold w-10/12 py-4 ">Your New Smile Starts Here</h1>
                            <p className="py-6 text-base leading-5 font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            <PrimaryBtn>Get Started</PrimaryBtn>
                        </div>
                    </div>

                </div>

            </section>
        </Rotate>



    );
};

export default Banner;