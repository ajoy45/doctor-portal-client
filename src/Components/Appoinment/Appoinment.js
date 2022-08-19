import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import Appoinmentbanner from './Appoinmentbanner';
import AvailabeService from './AvailabeService';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    // console.log(date)
    return (
        <div>
            <Appoinmentbanner date={date} setDate={setDate}></Appoinmentbanner>
            <AvailabeService date={date}></AvailabeService>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;