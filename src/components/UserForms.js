import { useState } from 'react';

function UserForms(entry){
    const [orderName, setOrderName] = useState('');
    const [price, setPrice] = useState('');
    const [isDiscounted, setIsDiscounted] = useState(false);
    
    const orderNameChangeHandler = (event) =>{
        setOrderName(event.target.value);
    }
    const priceChangeHandler = (event) =>{
        setPrice(event.target.value);
    }
    const isDiscountedChangeHandler = (event) =>{
        setIsDiscounted(event.target.checked);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        
        const userData = {
            orderName: orderName,
            price: price,
            discounted: isDiscounted
        }

        console.log(userData);
        entry.onSaveData(userData);
        setOrderName('');
        setPrice('');
        setIsDiscounted(false);
    }

    return(
        <form onSubmit={submitHandler}>
            <table className='form-container'>
                <thead className='form-container-head'>
                    <tr>
                        <th>Order Name</th>
                        <th>Price</th>
                        <th>On 5% Promo?</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='form-container-data'>
                        <td><input 
                                type='text'
                                value={orderName}
                                placeholder='Coffee or Tea'
                                onChange={orderNameChangeHandler}
                                required
                                onKeyPress={(event) => {
                                    if (!/[A-z'"]/.test(event.key)) {
                                        if (/[{/^\S*$/}]/.test(event.key)){
                                            event.preventDefault();
                                        }
                                    }
                                }}
                        /></td>
                        <td><input
                                type='text' 
                                value={price}
                                placeholder='0.00'
                                onChange={priceChangeHandler}
                                required
                                onKeyPress={(event) => {
                                    if (/[A-z]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                }}
                        /></td>
                        <td><input 
                                type='checkbox'
                                value={isDiscounted}
                                checked={isDiscounted}
                                onChange={isDiscountedChangeHandler}
                        /></td>
                        <td><button 
                                type='submit'
                                className='order-btn'>
                                Place Order
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default UserForms;