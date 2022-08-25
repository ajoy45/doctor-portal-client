import React from 'react';
import { useQuery } from 'react-query'

const Allusers = () => {
  const { isLoading, error, data: users } = useQuery('repoData', () =>
    fetch('https://serene-scrubland-02767.herokuapp.com/users').then(res =>
      res.json()
    )
  )
  if (isLoading) {
    return <button className="btn loading">loading</button>
  }
  return (
    <>
      <h1 className='text-3xl text-primary'>ALL Users:{users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>)
            }


          </tbody>
        </table>
      </div>
    </>
  );
};

export default Allusers;