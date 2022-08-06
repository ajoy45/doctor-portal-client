import React from 'react';
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    return (
        <section>
            <div className='flex justify-between items-center'>
                <div>
                    <h3>Testimonial</h3>
                    <h1>ehat our patients says</h1>
                </div>
                <div>
                    <img style={{width:192}} src={quote} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;