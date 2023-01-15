import React from 'react';


const CryptoTitle = ({data}) => {
    const {id, title , rate , icon }= data
    return (
        <div className="card selected">
            <div className="card-body">
                <div className="coin-icon mb-3">{icon}</div>
                    <div>{title}</div>
                    <div>@ {rate}</div>
                </div>
            </div>

        
    );
};
export default CryptoTitle