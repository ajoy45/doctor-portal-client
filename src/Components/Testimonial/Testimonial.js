import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people1.png';
import people3 from '../../assets/images/people3.png';
import Jump from 'react-reveal/Jump';
const Testimonial = () => {

    return (
        <Jump>
            <section className='mb-12'>
                <div className='flex justify-between items-center'>
                    <div >
                        <h3 className='text-primary text-xl font-bold uppercase'>Testimonial</h3>
                        <h1 className=' text-2xl font-normal uppercase'>ehat our patients says</h1>
                    </div>
                    <div >
                        <img className='lg:w-48 w-24' src={quote} alt="" />
                    </div>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 '>
                    <div className="card  bg-base-100 shadow-xl p-6">
                        <div className="card-body text-center pl-6">

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae voluptatem tenetur libero, tempore delectus, soluta dolorem sed ipsa ad quasi sunt nemo obcaecati quo magni! Magni dolores accusantium est rerum!</p>
                        </div>
                        <div className='flex justify-start items-center pl-6'>
                            <img className="mask mask-circle w-16 rounded-full border-2 border-primary " src={people1} alt='' />
                            <div className='pl-3'>
                                <h1>Winson Henry</h1>
                                <h3>California</h3>
                            </div>
                        </div>

                    </div>
                    <div className="card  bg-base-100 shadow-xl p-6">
                        <div className="card-body text-center">

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae voluptatem tenetur libero, tempore delectus, soluta dolorem sed ipsa ad quasi sunt nemo obcaecati quo magni! Magni dolores accusantium est rerum!</p>
                        </div>
                        <div className='flex justify-start items-center pl-6'>
                            <img className="mask mask-circle w-16 rounded-full border-2 border-primary" src={people2} alt='' />
                            <div className='pl-3'>
                                <h1>Winson Henry</h1>
                                <h3>California</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl p-6" >
                        <div className="card-body text-center" >

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae voluptatem tenetur libero, tempore delectus, soluta dolorem sed ipsa ad quasi sunt nemo obcaecati quo magni! Magni dolores accusantium est rerum!</p>
                        </div >
                        <div className='flex justify-start items-center pl-6'>
                            <img className="mask mask-circle w-16 rounded-full border-2 border-primary" src={people3} alt='' />
                            <div className='pl-3'>
                                <h1>Winson Henry</h1>
                                <h3>California</h3>
                            </div>
                        </div>
                    </div >


                </div >

            </section >
        </Jump>

    );
};

export default Testimonial;