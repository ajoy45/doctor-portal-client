import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../Shared/PrimaryBtn';
const DentalEx = () => {
    return (
        <div className="grid grid-col-1 lg:grid-cols-2 justify-center items-center bg-base-100 shadow-xl px-40 mb-6 ">
            <img style={{width:458}} src={treatment} alt="dentis" />
            <div className=" ml-6 "style={{width:497,}}>
                <h2 className="text-5xl font-bold pb-5">Exceptional Dental Care, on Your Terms</h2>
                <p className='pb-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryBtn>GET STARTED</PrimaryBtn>

            </div>
        </div>
    );
};

export default DentalEx;