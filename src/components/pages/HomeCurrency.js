
import React, { useState } from 'react';

import HomeCrypto from "../reusables/Home";
import '../../css/Crypto.css'
import CryptoTitle from "../reusables/CryptoFile";

function Crypto() {
    const titles = [
        { id: 1, title: 'BTC', rate: 33834, icon: <i className="fa-brands fa-bitcoin" /> },
        { id: 2, title: 'ETH', rate: 1340, icon: <i className="fa-brands fa-ethereum" /> },
        { id: 3, title: 'CDR', rate: 0.27054, icon: <i className="fa-solid fa-code" /> },
    ]

    const [selectedTitle, setSelectedTitle] = useState(titles[0]);
    console.log('parent', selectedTitle)
    const clickTitles = (data) => {
        setSelectedTitle(data);
    }
    return (


        <div className="container">

            <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                        {titles.map((item) => (
                            <CryptoTitle data={item} selected={item.id === selectedTitle.id}
                                titlesClicked={(data) => setSelectedTitle(data)
                                } />
                        ))}
                    </div>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>

    )
}

export default Crypto;