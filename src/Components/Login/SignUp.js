import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { Link } from "react-router-dom";

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      if(gUser||user){
        console.log(user,gUser)
      }
      if(gLoading||loading||updating){
        return <button className="btn loading">loading</button>
      }
      let errorMessage;
    if(error||gError||updateError){
        errorMessage= <span>{error.message}||{gError.message}||{updateError.message}</span> 
    }
    const handelSubmit= async event=>{
        event.preventDefault()
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        // this is email validation
        const emailValidation = /\S+@\S+\.\S+/;
        if(emailValidation.test(email)){
            // console.log(email)
        }else{
            alert('Please Type Valid Email')
        }
    // this is password validation
       const errors = [];
        if (password.length < 8) {
            errors.push("Your password must be at least 8 characters");
        }
        if (password.search(/[a-z]/i) < 0) {
            errors.push("Your password must contain at least one letter."); 
        }
        if (password.search(/[0-9]/) < 0) {
            errors.push("Your password must contain at least one digit.");
        }
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }
        // this is email password signin
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName:name})
    }
    return (
        <div className='mx-auto w-96 login-container pt-7 pb-7 mt-10 mb-6'>
            <h1 className='text-center font-bold'>Sign Up</h1>
            <form onSubmit={handelSubmit} className='pl-10'>
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text"name='name'required className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email"name='email'required className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password"name='password'required className="input input-bordered w-full max-w-xs mb-4" />
                
                <p className='text-red-500 '>{errorMessage}</p>
                <input type="submit" value="sign Up" className="input input-bordered w-full max-w-xs bg-accent text-white" />
                
                <div className="pl-8 mt-3">
                    <span className="label-text ">Already have an account?<Link to ='/login'className='text-primary'>GO to Login?</Link> </span>
                </div>
                <div className="flex flex-col  w-4/5  border-opacity-50 pl-10">
                    <div className="divider">OR</div>
                </div>
            </form>
            <div className='pl-10'>
                <button onClick={()=>signInWithGoogle()} className="btn w-full max-w-xs bg-accent text-white ">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;