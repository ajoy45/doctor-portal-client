import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import fluride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
const Home = () => {
    const serviceTitles={
        title1:'Fluoride Treatment',
        title2:'Cavity Filling',
        title3:'Teeth Whitening',
        description1:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        description2:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        description3:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    }

    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <div className='mt-32 mb-12 px-12'>
                <div className='text-center '>
                    <h4 className='text-primary font-bold text-2xl'>OUR SERVICES</h4>
                    <h1 className='font-normal text-3xl p-4'>Services We Provide</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <Services description={serviceTitles.description1} title={serviceTitles.title1} img={fluride}></Services>
                    <Services description={serviceTitles.description2} title={serviceTitles.title2} img={cavity}></Services>
                    <Services description={serviceTitles.description3} title={serviceTitles.title3} img={teeth}></Services>
                </div>
            </div>


        </div>
    );
};

export default Home;