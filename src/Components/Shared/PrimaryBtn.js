import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button className="btn btn-primary text-white font-bold w-3/2 bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default PrimaryBtn;