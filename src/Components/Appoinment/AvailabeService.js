import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import BookingModal from './BookingModol';
import AvailableServiceDetails from './AvailableServiceDetails'
import { useQuery } from 'react-query';
import Swing from 'react-reveal/Swing';
const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`https://serene-scrubland-02767.herokuapp.com/available?date=${formattedDate}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <button className="btn loading">loading</button>
    }
    // useEffect(() => {
    //     fetch(`https://serene-scrubland-02767.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate])

    return (
        <Swing>
            <div className='my-10'>
                <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <AvailableServiceDetails
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></AvailableServiceDetails>)
                    }
                </div>
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
            </div>
        </Swing>

    );
};

export default AvailableAppointments;