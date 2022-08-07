import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker, ClassNames } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import bg from '../../assets/images/bg.png'
const Appoinmentbanner = ({date,setDate}) => {
    const classNames: ClassNames = {
        head: 'custom-head'
      };
    return (
        <div style={
            {
                background:`url(${bg})`,
                backgroundSize:'cover',
                backgroundPosition:'center'
            
            }} className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                <style>{`.custom-head { color: blue }`}</style>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        
                        classNames={classNames}
                        styles={{
                            caption: { color: 'red' }
                          }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Appoinmentbanner;