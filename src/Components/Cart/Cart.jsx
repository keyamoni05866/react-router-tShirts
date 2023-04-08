import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message= <p>Please add some products</p>
    }
    return (
        <div >
            <h2>Order Summary: {cart.length}</h2>
            {cart.length < 2 ? <span>Add some more</span>: ''}
            {message}
       
          {
                cart.map(tshirt =>
                
                <div className='container' key={tshirt._id}>
                   <span className='name'>  {tshirt.name}</span>
                     <div><button className='btn' onClick={()=>handleRemoveFromCart(tshirt._id)}>Remove</button></div>
                    </div>)
            }
      {
        cart.length === 2 && <p>Enjoy your shopping</p>
      }
      {
        cart.length == 3 || <h3>You have to add at least 3</h3>
      }
        </div>
    );
};

export default Cart;


/**
 * Conditional  Rendering
 * 1. use if else to set a variable that will contain an element, components or div.
 * 2. ternary: condition ? 'for true' : 'false'
 * 3. logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 * 
 */

/**
 *  CONDITIONAL CSS CLASS
 * 1. use ternary 
 * 2. ternary inside template string
 * 
 * 
 */