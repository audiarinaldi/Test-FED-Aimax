import React,{useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useFetch from './useFetch';

const getCurrentDate=()=> {

    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds
    return `${year}-${month<10?`0${month}`:`${month}`}-${date} ${hours<10?`0${hours}`:`${hours}`}:${min<10?`0${min}`:`${min}`}:${sec<10?`0${sec}`:`${sec}`}`
}

const EditData = () => {
    const [productID,setProductID] = useState(10001);
    const [productName,setProductName] = useState("Test 1");
    const [amount,setAmount] = useState("");
    const [customerName, setCustomerName]= useState("");
    const [status,setStatus]= useState(0)
    const [isPending,setIsPending] = useState(false);
    const [transactionDate, setTransactionDate] = useState(getCurrentDate());
    useEffect(()=>{
        if(productID==10001){
            setProductName("Test 1")
        }
        else if(productID==10002){
            setProductName("Test 2")
        }else{
        
        }
    },[productID]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const dataAdd = {productID,productName,amount,customerName,status,transactionDate}
        console.log(dataAdd)
        setIsPending(true)
        fetch("http://localhost:3005/data",{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataAdd)
        })
        .then(()=>{
            console.log("new data added");
            setIsPending(false)
            navigate('/')
        })
    }
    
    const navigate = useNavigate();
    const {dataStatus,isPending2} = useFetch("http://localhost:3005/status")
    const{id} = useParams()
    const {data, isPending1} = useFetch(`http://localhost:3005/data/`+id)
    return ( 
        <div className="editData">
            <form onSubmit={handleSubmit}>
              {isPending1 && <div>
                loading....
              </div>}
              {!isPending1 &&
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
                            {!isPending && <button className="my-button btn-blue"  >Edit</button>}
                            {isPending && <button className="my-button btn-blue"  disabled>Editing...</button>}

                    </div>
                </div>
            }
            </form>
        </div>

     );
}
 
export default EditData;