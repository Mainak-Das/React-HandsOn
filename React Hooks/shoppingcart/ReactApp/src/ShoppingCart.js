import React,{ useReducer, useState } from 'react';
import './style.css';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, { id: Date.now(), name: action.payload.name, price: action.payload.price }],
        message: 'Item Added Successfully',
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        message: 'Item Removed Successfully',
      };
    default:
      return state;
  }
}

function ShoppingCart() {
  
  // Initial state
  const initialState = { items: [], message: '' };


  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Local state for input fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');


  //Create the state variables using useState() and useReducer()
  return (
    <>
    <h2>ElectroNest - The Digital Park</h2>
    <br></br>
          <table border={1} style={{marginLeft: "20px"}}>
        <thead>
          <tr>
            <th>SI No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button id="remove" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}>
                  Remove
                </button>
              </td>
            </tr>
          ))}


        </tbody>
      </table><br></br>
        <input id="name" type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input id="price" type="text" placeholder="Item Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button id="add" onClick={() => dispatch({ type: 'ADD_ITEM', payload: { name, price } })}>
          Add Item
        </button>

        <div id="message">
          <p>{state.message}</p>
        </div>
    </>
  );
}
export default ShoppingCart;