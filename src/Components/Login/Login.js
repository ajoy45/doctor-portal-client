import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='mx-auto w-96 login-container pt-7 pb-7 mt-10'>
            <h1 className='text-center font-bold'>Login</h1>
            <form className='pl-10'>
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Forgot Password?</span>
                </label>
                <input type="submit" value="Login" className="input input-bordered w-full max-w-xs bg-accent text-white" />
                <div className="pl-8 mt-3">
                    <span className="label-text ">New to Doctor portal?<span className='text-primary'>Create New Account?</span> </span>
                </div>
                <div className="flex flex-col  w-4/5  border-opacity-50 pl-10">
                    <div className="divider">OR</div>
                </div>
            </form>
            <div className='pl-10'>
                <button className="btn w-full max-w-xs bg-accent text-white ">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;