function StatusHeader(status){
    const message=[ "",                                                 //scenario 0
                    "Order is successfully added.",                     //scenario 1
                    "Order is successfully updated.",                   //scenario 2
                    "Order is successfully deleted.",                   //scenario 3
                    "Cannot load details. Something went wrong.",       //scenario 4
                    "Unable to add order. Something went wrong.",       //scenario 5
                    "Unable to update order. Something went wrong.",    //scenario 6
                    "Unable to delete order. Something went wrong.",    //scenario 7
                    "Unsupported web URL.",                             //scenario 8
                ];
    const clear = () =>{
        status.clear(0);
    }

    if (status.scenario >= 1 && status.scenario <= 3) {
        return(
            <div className="status-header-nominal">
                {message[status.scenario]}
                {status.scenario !== 8? 
                    <button className="smol-btn" onClick={clear}>
                        x
                    </button> 
                    : 
                    <p/>
                }
            </div>
        )
    } else if(status.scenario >= 4 && status.scenario <= 8) {
        return(
            <div className="status-header-error">
                {message[status.scenario]}
                {status.scenario !== 8? 
                    <button className="smol-btn" onClick={clear}>
                        x
                    </button> 
                    : 
                    <p/>
                }
            </div>
        )
    } else {
        return(<div/>)            
    }
    
}

export default StatusHeader;