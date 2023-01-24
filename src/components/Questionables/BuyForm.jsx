import React, { useState, useEffect, UseCallback } from 'react';
import InputBase from '../reusables/InputBase';

const BuyForm = ({ data }) => {
    const { title, rate } = data;
    const INIT = { amount: 0, converted: 0 }
    const [exchange, setExchange] = useState(INIT);
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        setExchange({
            ...exchange,
            converted: (Number(exchange.amount) / rate).toFixed(4)
        })
    }, [title]);


    const handleChange = ({ target: { value, name } }) => {
        const val = Number(value.trim());
        const converted = (val / rate).toFixed(4);


        setExchange({
            [name]: val,
            converted,
        });
        // const makePurchase = UseCallback((e)=> {
        // e.preventDefault();
        // const payload={
        //     ...exchange,
        //     title,
        // }
        // setTransactions([...transactions, payload])
        // },[transactions]);




        console.log()

    }
    return (
        <form onSubmit={exchange.makePurchase} className="form">
            <div className="input-group mb-3">
                <InputBase name="amount" onChange={handleChange} textLabel="USD" />

                <i className="fas fa-exchange-alt" />
                <InputBase textLabel={title} value={exchange.converted} />
            </div>
            {/* <input className="btn btn-primary" type="submit" value="Purchase" /> */}
        </form>
    )


}
export default BuyForm;