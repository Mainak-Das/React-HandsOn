import React, { useState } from 'react';
//ADD REQUIRED IMPORTS
import './stocks.css';
var data=[    
    {"id":"ST1", "Stock":"Apple", "Price":"$150"},    
    {"id":"ST2", "Stock":"Amazon", "Price":"$3500"},
    {"id":"ST3", "Stock":"Alibaba Group","Price":"$175"},
    {"id":"ST4", "Stock":"Johnson & Johnson","Price":"$160"},
  ];  
 
const Stocks = () => {
  //IMPLEMENT YOUR CODE HERE
    const[stocks, setStocks] = useState(data);
        return (
            <>
              <h1 className="title"> STOCK SECURITIES</h1>
              <h2 className="subtitle">REPORT</h2>
              <table className="tableCSS">
              <tbody>
              {stocks.map((item)=>(
              <Display key={item.id} stocks={item} />
              ))}
              </tbody>
              </table>
            </>
         
          );
}
 
const Display = ({key , stocks}) => {
    //IMPLEMENT YOUR CODE HERE
 
      return (
        <tr>
        <td className="tdCSS">{stocks.id}</td>
        <td className="tdCSS">{stocks.Stock}</td>
        <td className="tdCSS">{stocks.Price}</td>
        </tr>
       
     );
 
}
 
export {Display}
export default Stocks