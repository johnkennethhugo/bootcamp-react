function ItemRowRead(item){
    return(
        <tr className='item-container-data'>
            <td>{item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td><input type='checkbox' checked={item.discounted ? true : false} disabled/></td>
            <td>
                <button className='item-btn' onClick={() => item.onEditItem(item)}>Edit</button>
                &nbsp;|&nbsp;
                <button className='item-btn' onClick={() => item.onDeleteItem(item.id)}>Delete</button>
            </td>
        </tr>
    );
}

export default ItemRowRead;