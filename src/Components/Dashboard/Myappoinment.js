import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Myappoinment = () => {
    const[user]=useAuthState(auth)
    const[myappoinment,setmyappoinment]=useState([]);
    let count=1
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=>setmyappoinment(data))
       }
    },[user])
    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {
              myappoinment.map(a=> <tr>
                <th>{count++}</th>
                <td>{a.patientName}</td>
                <td>{a.patient}</td>
                <td>{a.date}</td>
                <td>{a.treatment}</td>
              </tr>)
            }
           
           
          </tbody>
        </table>
      </div>
    );
};

export default Myappoinment;