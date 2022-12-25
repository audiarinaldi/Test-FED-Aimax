import React from 'react';
import {  useParams } from 'react-router-dom';
import useFetch from './useFetch';


const DetailData = () => {
    const {dataStatus,isPending2} = useFetch("http://localhost:3005/status")
    const{id} = useParams()
    const {data, isPending} = useFetch(`http://localhost:3005/data/`+id)
    return ( 
        <div className="detailData">
              {isPending && <div>
                loading....
              </div>}
              {!isPending &&
                <div className="container">
                    <div className="content">
                           <label>Product</label>
                            <select value={data.productID} disabled>
                                <option value="10001">Test 1</option>
                                <option value="10002">Test 2</option>
                            </select>
                            <br/>
                            <label htmlFor="amount">Product amount:</label>
                            <input type="number" id="amount" placeholder="jumlah" name="amount" value={data.amount} disabled /><br></br>
                            <label htmlFor="cust">Customer name:</label>
                            <input type="text" id="cust" placeholder="nama" name="cust" value={data.customerName} disabled/><br></br>
                            <label>Status</label>
                            {isPending2 && <div>
                                loading....
                            </div>}
                            {!isPending2  && 
                                <select value={data.status} disabled>
                                    {dataStatus && dataStatus.map((status)=>(
                                        <option value={status.id}>{status.name}</option>
                                    ))}
                                    {console.log(dataStatus)}
                                </select>
                            }
                            {!isPending && <button className="my-button btn-blue"  >Add</button>}
                            {isPending && <button className="my-button btn-blue"  disabled>Adding...</button>}
                    </div>
                </div>

            }
        </div>

     );
}
 
export default DetailData;