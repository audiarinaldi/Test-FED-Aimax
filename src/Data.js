import React, { useState, useEffect } from 'react';
import DataList from './DataList';
import useFetch from './useFetch';

const Data = ()=>{

    const { datas, isPending } = useFetch("http://localhost:3005/data")

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>Product Id</td>
                                <td>Name</td>
                                <td>Amount</td>
                                <td>Customer Name</td>
                                <td>Status</td>
                                <td>Transaction Date</td>
                                <td>Created By</td>
                                <td>Created On</td>
                                <td>Detail</td>
                                <td>Edit</td>  
                            </tr>
                        </thead>
                        { isPending && <div>Loading...</div>}
                        {datas &&<DataList datas={datas}/>}
                        {/* <DataList datas={datas.filter((data) => data.id == '1373')}/> */}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Data;
