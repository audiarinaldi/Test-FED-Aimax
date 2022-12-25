import React,{useState, useEffect } from 'react';
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

const AddData = () => {
const [productID,setProductID] = useState(10001);
const [productName,setProductName] = useState("Test 1");
const [amount,setAmount] = useState("");
const [customerName, setCustomerName]= useState("");
const [status,setStatus]= useState(0)
const [isPending,setIsPending] = useState(false);
const [transactionDate, setTransactionDate] = useState(getCurrentDate());
const [createBy, setCreateBy] = useState("abc");
const [createOn, setCreateOn] = useState(getCurrentDate());

const navigate = useNavigate();
const {datas,isPending2} = useFetch("http://localhost:3005/status")


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
    const dataAdd = {productID,productName,amount,customerName,status,createBy,createOn,transactionDate}
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

    return ( 
        <div className="addData">
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="content">
                           <label>Product</label>
                            <select onChange={(e) => setProductID(e.target.value)}>
                                <option value="10001">Test 1</option>
                                <option value="10002">Test 2</option>
                            </select>
                            <br/>
                            <label htmlFor="amount">Product amount:</label>
                            <input type="number" id="amount" placeholder="jumlah" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} /><br></br>
                            <label htmlFor="cust">Customer name:</label>
                            <input type="text" id="cust" placeholder="nama" name="cust" value={customerName} onChange={(e) => setCustomerName(e.target.value)} /><br></br>
                            <label>Status</label>
                            <select onChange={(e) => setStatus(e.target.value)} value={status}>
                                {datas && datas.map((data)=>(
                                    <option value={data.id}>{data.name}</option>
                                ))}
                            </select>
                            <br/>
                            {!isPending && <button className="my-button btn-blue"  >Add</button>}
                            {isPending && <button className="my-button btn-blue"  disabled>Adding...</button>}

                            {/* <br/>
                            {productID}
                            <br/>
                            {productName}
                            <br/>
                            {amount}
                            <br/>
                            {customerName}
                            <br/>
                            {status} */}
                    </div>
                </div>
            </form>

        </div>

     );
}
 
export default AddData;