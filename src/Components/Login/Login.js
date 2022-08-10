import React from 'react';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../src/Firebase.init'
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(gLoading||loading){
        return <button class="btn loading">loading</button>
      }
      let errorMessage;
    if(error||gError){
        errorMessage= <span>{error.message}</span> 
    }
    const handelSubmit=event=>{
        event.preventDefault()
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
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='mx-auto w-96 login-container pt-7 pb-7 mt-10'>
            <h1 className='text-center font-bold'>Login</h1>
            <form onSubmit={handelSubmit} className='pl-10'>
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email"name='email'required className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password"name='password'required className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Forgot Password?</span>
                </label>
                <p>{errorMessage}</p>
                <input type="submit" value="Login" className="input input-bordered w-full max-w-xs bg-accent text-white" />
                
                <div className="pl-8 mt-3">
                    <span className="label-text ">New to Doctor portal?<span className='text-primary'>Create New Account?</span> </span>
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

export default Login;