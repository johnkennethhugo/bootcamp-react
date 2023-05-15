import { useEffect, useState } from "react";
import Api from "../api/Api";

function ItemTableBills(item){
    const [totalAmount,setTotalAmount] = useState(0.00);
    useEffect(() => {
        getPrice();
    });

    const clerkCapture = (name) =>{
        item.clerk(name);
    }

    const getPrice = async () => {
        if(item.message === 'Total Regular Bill'){
            const result = await  Api.get('/regularTotalPrice');
            setTotalAmount(result.data.totalBill);
            clerkCapture(result.data.clerk.name);
        }
        if(item.message === 'Total Discounted Bill'){
            const result = await  Api.get('/discountedTotalPrice');
            setTotalAmount(result.data.totalBill);
        }
        
    }

    return(
        <tr className='item-container-data'>
            <td colSpan='4'>{item.message}: <b>${totalAmount.toFixed(2)}</b></td>
        </tr>
    );
}

export default ItemTableBills;