import { useState } from "react";

function ItemRowEdit(item){
    const [orderName, setOrderName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [isDiscounted, setIsDiscounted] = useState(item.discounted);
    
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
        item.onUpdateData(userData);
        setOrderName('');
        setPrice('');
        setIsDiscounted(false);
    }

    return(
        <tr className='item-container-data'>
            <td><input 
                    type='text'
                    value={orderName}
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
            <td>
                <button className='item-btn' onClick={submitHandler}>Update</button>
                &nbsp;|&nbsp;
                <button className='item-btn' onClick={() => item.onCancelEdit(item.id)}>Cancel</button>
            </td>
        </tr>
    );
}

export default ItemRowEdit;