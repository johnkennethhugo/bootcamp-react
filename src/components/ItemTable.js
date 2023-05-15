import ItemRowEdit from "./ItemRowEdit";
import ItemRowRead from "./ItemRowRead";
import ItemTableBills from "./ItemTableBills";
import { Fragment, useState } from "react";

function ItemTable(table){
    const [rowEditID, setRowEditID] = useState('');
    const [clerkName, setClerkName] = useState('');


    const onRemoveItem = (item) =>{
        table.onDeleteData(item);
    }
    const onEditItem = (item) =>{
        setRowEditID(item.id);
    }
    const onUpdateItem = (item) =>{
        const updateEntry = {
            id: rowEditID,
            ...item,
          };
        table.onUpdateItem(updateEntry);
        setRowEditID(null);
    }
    const onCancelEdit = () =>{
        setRowEditID(null);
    }


    return(
        <table className='item-container'>
            <thead className='item-container-clerk'>
                    <tr>
                     <th colSpan='4'>Attending Clerk: {clerkName}</th>
                </tr>
            </thead>
            <thead className='item-container-head'>
                <tr>
                    <th>Order Name</th>
                    <th>Price</th>
                    <th>On 5% Promo?</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {table.items.map((item) => (
                    <Fragment key={item.id}>
                        {rowEditID === item.id ?
                            <ItemRowEdit
                                name={item.orderName}
                                price={item.price}
                                discounted={item.discounted}
                                onUpdateData={onUpdateItem}
                                onCancelEdit={onCancelEdit}/> 
                            :
                            <ItemRowRead 
                                id={item.id}
                                name={item.orderName}
                                price={item.price}
                                discounted={item.discounted}
                                onEditItem={onEditItem}
                                onDeleteItem={onRemoveItem}/>
                        }
                    </Fragment>
                    ))}
                <ItemTableBills message="Total Regular Bill" clerk={(e)=>{setClerkName(e)}}/>
                <ItemTableBills message="Total Discounted Bill"/>
            </tbody>
        </table>
    );
}

export default ItemTable;