import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


const DataList = ({datas}) => {

    return ( 
    <tbody>
        {datas.map((data)=>(
           <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.productID}</td>
              <td>{data.productName}</td>
              <td>{data.amount}</td>
              <td>{data.customerName}</td>
              <td>{data.status}</td>
              <td>{data.transactionDate}</td>
              <td>{data.createBy}</td>
              <td>{data.createOn}</td>
              <td>
                <Link to={`/DetailData/${data.id}`}>
                    <Button variant="outline-primary">Detail</Button>
                </Link>   
            </td>
            <td>
                <Link to={`/EditData/${data.id}`}>
                    <Button variant="outline-primary">Edit</Button>
                </Link>   
            </td>

          </tr>
        ))}
    </tbody>
    );
}
 
export default DataList;
