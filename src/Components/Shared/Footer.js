import React from 'react';
import footer from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover',
            paddingTop: "50px",
            paddingBottom: "150px",
        }} className="">
            <div className='footer  pl-40'>
                <div>
                    <span className="footer-title backdrop: text-primary">Services</span>
                    <a className="link link-hover  text-black">Branding</a>
                    <a className="link link-hover  text-black">Design</a>
                    <a className="link link-hover  text-black">Marketing</a>
                    <a className="link link-hover  text-black">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-primary">Company</span>
                    <a className="link link-hover  text-black">About us</a>
                    <a className="link link-hover  text-black">Contact</a>
                    <a className="link link-hover  text-black">Jobs</a>
                    <a className="link link-hover  text-black">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-primary">Legal</span>
                    <a className="link link-hover  text-black">Terms of use</a>
                    <a className="link link-hover  text-black">Privacy policy</a>
                    <a className="link link-hover  text-black">Cookie policy</a>
                </div>
            </div>
            <div >
                <p className='text-center mt-24'>Copyright © 2022 - All right reserved by doctors portal</p>
            </div>
        </footer>
    );
};

export default Footer;