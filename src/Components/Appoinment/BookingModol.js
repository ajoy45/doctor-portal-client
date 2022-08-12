import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const BookingModol = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const[user]=useAuthState(auth)
    const handelSubmit = event => {
        event.preventDefault()
        const date = event.target.date.value;
        const slot = event.target.slot.value;
        const clientName = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        console.log( name, date, slot, clientName, phone, email)
        setTreatment(null)
        const url='http://localhost:5000/booking'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name:name,
                slot:slot,
                clientName:clientName,
                phone:phone,
                email:email
            }),
            headers: {
                'authorization':`${user.email} ${localStorage.getItem('JSON_TOKEN')}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
    return (
        <div className='text-center'>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking Name:{name} </h3>

                    <form onSubmit={handelSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" name='date' value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index) => <option
                                key={index}
                                >{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name"disabled
                        value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className=" btn btn-primary w-full max-w-xs" />
                    </form>



                </div>
            </div>
        </div>
    );
};

export default BookingModol;